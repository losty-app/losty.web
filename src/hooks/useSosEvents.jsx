import { API, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCreateSosEvent, onUpdateSosEvent } from "src/graphql/subscriptions";
import {
  listAllProviderResponsesBySosEventId,
  listAllSosEventsByRequesterIds,
} from "src/helpers/queriesHelper";

const useSosEvents = (callFrom = "") => {
  const dispatch = useDispatch();
  const sosEvents = useSelector((state) => state.sosEvents);
  const requesters = useSelector((state) => state.requesters);
  const profile = useSelector((state) => state.profile);

  const fetchSosEvents = async () => {
    try {
      if (requesters?.length > 0) {
        /* This code block is responsible for fetching SOS events and their corresponding provider
        responses. */
        const requesterIds = requesters.map(({ id }) => id);
        const fetchedSosEvents = await listAllSosEventsByRequesterIds(
          requesterIds
        );

        const fetchedProviderResponses = await Promise.all(
          fetchedSosEvents.map(({ id }) =>
            listAllProviderResponsesBySosEventId(id)
          )
        );

        fetchedSosEvents.forEach((sosEvent, index) => {
          const providerResponses = fetchedProviderResponses[index];
          const groupedResponses = [[], [], [], []]; // For UNSEEN, SEEN, APPROVED_OUT, APPROVED_DEST
          providerResponses.forEach((response) => {
            switch (response.status) {
              case "UNSEEN":
                groupedResponses[0].push(response);
                break;
              case "SEEN":
                groupedResponses[1].push(response);
                break;
              case "APPROVED_OUT":
                groupedResponses[2].push(response);
                break;
              case "APPROVED_DEST":
                groupedResponses[3].push(response);
                break;
              default:
                // Handling other statuses
                break;
            }
          });

          sosEvent.unseen = groupedResponses[0];
          sosEvent.seen = groupedResponses[1];
          sosEvent.approvedOut = groupedResponses[2];
          sosEvent.approvedDest = groupedResponses[3];
        });

        dispatch({ type: "SET_SOS_EVENTS", payload: fetchedSosEvents });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch providers if not available in Redux
    if (!sosEvents || sosEvents?.length === 0 || callFrom === "HOME") {
      fetchSosEvents();
    }
  }, []);

  useEffect(() => {
    if (!profile) return;
    if (!requesters || requesters.length === 0) return;

    const requesterIds = requesters.map((requester) => requester.id);

    // Subscribe to new providers
    const onSosEventCreatedSubscription = API.graphql(
      graphqlOperation(onCreateSosEvent, {
        filter: { requesterId: { in: requesterIds } },
      })
    ).subscribe({
      next: ({ value }) => {
        const newSosEvent = value?.data?.onCreateSosEvent?.provider;
        if (newSosEvent) {
          dispatch({
            type: "SET_SOS_EVENTS",
            payload: [newSosEvent, ...sosEvents],
          });
        }
      },
      error: (error) => console.error(error),
    });

    return () => {
      onSosEventCreatedSubscription.unsubscribe();
    };
  }, [dispatch, sosEvents]);

  useEffect(() => {
    if (!profile) return;
    if (!requesters || requesters.length === 0) return;

    const requesterIds = requesters.map((requester) => requester.id);

    // Subscribe to updated providers
    const onSosEventUpdatedSubscription = API.graphql(
      graphqlOperation(onUpdateSosEvent, {
        filter: {
          requesterId: {
            in: requesterIds, // Filter providers where the ID is in the list of providerIds
          },
        },
      })
    ).subscribe({
      next: ({ value }) => {
        const updatedSosEvent = value.data.onUpdateSosEvent;

        // Dispatch or perform other actions here
        dispatch({
          type: "UPDATE_SOS_EVENT",
          payload: updatedSosEvent,
        });
      },
      error: (error) => console.error(error),
    });

    return () => {
      onSosEventUpdatedSubscription.unsubscribe();
    };
  }, [dispatch, sosEvents]);

  return { sosEvents };
};

export default useSosEvents;
