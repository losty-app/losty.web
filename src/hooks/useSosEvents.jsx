import { API, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onCreateSosEvent,
  onUpdateProviderResponse,
  onUpdateSosEvent,
} from "src/graphql/subscriptions";
import {
  getSosEventsByRequesterId,
  listAllProviderResponsesBySosEventId,
} from "src/helpers/queriesHelper";
import useProviders from "./useProviders";
import { ProviderResponseStatus, SosEventStatus } from "src/models";

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

        const fetchedSosEvents = (
          await Promise.all(
            requesterIds.map(
              async (requesterId) =>
                await getSosEventsByRequesterId(requesterId)
            )
          )
        )
          .flat()
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        const fetchedProviderResponses = await Promise.all(
          fetchedSosEvents.map(({ id }) =>
            listAllProviderResponsesBySosEventId(id)
          )
        );

        fetchedSosEvents.forEach((sosEvent, index) => {
          if (sosEvent.status === SosEventStatus.PENDING) {
            dispatch({
              type: "UPDATE_REQUESTER",
              payload: { id: sosEvent.requesterId, isSOS: true },
            });
          }
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

        dispatch({ type: "SET_SOS_EVENTS", payload: fetchedSosEvents });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!profile) return;
    if (!requesters || requesters.length === 0) return;
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
          const { id, firstName, lastName } = requesters.find(
            (requester) => requester.id === newSosEvent.requesterId
          );
          dispatch({
            type: "UPDATE_REQUESTER",
            payload: { id, isSOS: true },
          });
          newSosEvent.fullName = firstName + " " + lastName;
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

    // onSosEventUpdatedSubscription
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
        if (updatedSosEvent.status === SosEventStatus.FINISHED) {
          dispatch({
            type: "UPDATE_REQUESTER",
            payload: { id: updatedSosEvent.requesterId, isSOS: false },
          });
        }
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

  useEffect(() => {
    if (!profile) return;
    if (!requesters || requesters.length === 0) return;
    if (!sosEvents || sosEvents.length === 0) return;

    const sosEventsIds = sosEvents.map((sosEvent) => sosEvent.id);

    // Subscribe to updated providers
    const onProviderResponseUpdatedSubscription = API.graphql(
      graphqlOperation(onUpdateProviderResponse, {
        filter: {
          sosEventId: {
            in: sosEventsIds, // Filter providers where the ID is in the list of providerIds
          },
        },
      })
    ).subscribe({
      next: ({ value }) => {
        const updatedProviderResponse = value.data.onUpdateProviderResponse;
        const currSosEvent = sosEvents.find(
          (sosEvent) => sosEvent.id === updatedProviderResponse.sosEventId
        );

        switch (updatedProviderResponse.status) {
          case ProviderResponseStatus.UNSEEN:
            currSosEvent.unseen = [
              ...currSosEvent.unseen,
              updatedProviderResponse,
            ];
            break;
          case ProviderResponseStatus.SEEN:
            currSosEvent.seen = [
              ...currSosEvent.unseen,
              updatedProviderResponse,
            ];
            break;
          case ProviderResponseStatus.APPROVED_OUT:
            currSosEvent.approvedOut = [
              ...currSosEvent.unseen,
              updatedProviderResponse,
            ];
            break;
          case ProviderResponseStatus.APPROVED_DEST:
            currSosEvent.approvedDest = [
              ...currSosEvent.unseen,
              updatedProviderResponse,
            ];
            break;
        }
      },
      error: (error) => console.error(error),
    });

    return () => {
      onProviderResponseUpdatedSubscription.unsubscribe();
    };
  }, [dispatch, sosEvents]);

  useEffect(() => {
    if (!profile) return;
    if (!requesters || requesters.length === 0) return;
    if (!sosEvents || sosEvents.length === 0) return;

    const sosEventsIds = sosEvents.map((sosEvent) => sosEvent.id);

    // Subscribe to created provider responses
    const onProviderResponseCreatedSubscription = API.graphql(
      graphqlOperation(onUpdateProviderResponse, {
        filter: {
          sosEventId: {
            in: sosEventsIds, // Filter providers where the ID is in the list of providerIds
          },
        },
      })
    ).subscribe({
      next: ({ value }) => {
        const createdProviderResponse = value.data.onCreateProviderResponse;
        const currSosEvent = sosEvents.find(
          (sosEvent) => sosEvent.id === createdProviderResponse.sosEventId
        );

        switch (createdProviderResponse.status) {
          case ProviderResponseStatus.UNSEEN:
            currSosEvent.unseen = [
              ...currSosEvent.unseen,
              createdProviderResponse,
            ];
            break;
          case ProviderResponseStatus.SEEN:
            currSosEvent.seen = [
              ...currSosEvent.unseen,
              createdProviderResponse,
            ];
            break;
          case ProviderResponseStatus.APPROVED_OUT:
            currSosEvent.approvedOut = [
              ...currSosEvent.unseen,
              createdProviderResponse,
            ];
            break;
          case ProviderResponseStatus.APPROVED_DEST:
            currSosEvent.approvedDest = [
              ...currSosEvent.unseen,
              createdProviderResponse,
            ];
            break;
        }
      },
      error: (error) => console.error(error),
    });

    return () => {
      onProviderResponseCreatedSubscription.unsubscribe();
    };
  }, [dispatch, sosEvents]);

  return { sosEvents };
};

export default useSosEvents;
