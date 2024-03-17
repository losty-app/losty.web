import { API, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCreateSosEvent, onUpdateSosEvent } from "src/graphql/subscriptions";
import {
  getSosEventsByRequesterId,
  listAllProviderResponsesBySosEventId,
  listAllSosEventsByRequesterIds,
} from "src/helpers/queriesHelper";
import useProviders from "./useProviders";

const useSosEvents = (callFrom = "") => {
  const dispatch = useDispatch();
  const sosEvents = useSelector((state) => state.sosEvents);
  const requesters = useSelector((state) => state.requesters);
  const { providers } = useProviders("HOME");
  const profile = useSelector((state) => state.profile);

  const fetchSosEvents = async () => {
    try {
      if (requesters?.length > 0) {
        /* This code block is responsible for fetching SOS events and their corresponding provider
        responses. */
        const requesterIds = requesters.map(({ id }) => id);

        const fetchedSosEvents = [];

        for (const requesterId of requesterIds) {
          const sosEvents = await getSosEventsByRequesterId(requesterId);
          fetchedSosEvents.push(...sosEvents);
        }

        const fetchedProviderResponses = await Promise.all(
          fetchedSosEvents.map(({ id }) =>
            listAllProviderResponsesBySosEventId(id)
          )
        );

        fetchedSosEvents.forEach((sosEvent, index) => {
          const providerResponses = fetchedProviderResponses[index];
          const groupedResponses = [[], [], [], []]; // For UNSEEN, SEEN, APPROVED_OUT, APPROVED_DEST
          providerResponses.forEach((response) => {
            const currProvider = providers.find(
              (provider) => provider.id === response.providerResponseProviderId
            );
            switch (response.status) {
              case "UNSEEN":
                groupedResponses[0].push(
                  currProvider.firstName + " " + currProvider.lastName
                );
                break;
              case "SEEN":
                groupedResponses[1].push(
                  currProvider.firstName + " " + currProvider.lastName
                );
                break;
              case "APPROVED_OUT":
                groupedResponses[2].push(
                  currProvider.firstName + " " + currProvider.lastName
                );
                break;
              case "APPROVED_DEST":
                groupedResponses[2].push(
                  currProvider.firstName + " " + currProvider.lastName
                );
                groupedResponses[3].push(
                  currProvider.firstName + " " + currProvider.lastName
                );
                break;
              default:
                // Handling other statuses
                break;
            }
          });

          const currRequester = requesters.find(
            (requester) => requester.id === sosEvent.requesterId
          );
          sosEvent.fullName =
            currRequester.firstName + " " + currRequester.lastName;
          sosEvent.unseen = groupedResponses[0];
          sosEvent.seen = groupedResponses[1];
          sosEvent.approvedOut = groupedResponses[2];
          sosEvent.approvedDest = groupedResponses[3];
        });

        console.log("fetchedSosEvents: ");
        console.log(fetchedSosEvents);

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
        const newSosEvent = value?.data?.onCreateSosEvent;
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
