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
  }, [requesters?.length > 0]);

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
            type: "UPDATE_SOS_EVENT",
            payload: newSosEvent,
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
    if (!providers || providers.length === 0) return;
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
        if (updatedProviderResponse) {
          const currSosEvent = sosEvents.find(
            (sosEvent) => sosEvent.id === updatedProviderResponse.sosEventId
          );

          const currProvider = providers.find(
            (provider) =>
              provider.id === updatedProviderResponse.providerResponseProviderId
          );

          switch (updatedProviderResponse.status) {
            case ProviderResponseStatus.UNSEEN:
              currSosEvent.unseen.push(
                currProvider.firstName + " " + currProvider.lastName
              );
              break;
            case ProviderResponseStatus.SEEN:
              currSosEvent.seen.push(
                currProvider.firstName + " " + currProvider.lastName
              );
              break;
            case ProviderResponseStatus.APPROVED_OUT:
              currSosEvent.approvedOut.push(
                currProvider.firstName + " " + currProvider.lastName
              );
              break;
            case ProviderResponseStatus.APPROVED_DEST:
              currSosEvent.approvedDest.push(
                currProvider.firstName + " " + currProvider.lastName
              );
              break;
          }
        }

        dispatch({
          type: "UPDATE_SOS_EVENT",
          payload: currSosEvent,
        });
      },
      error: (error) => console.log("Failed to updated sos event"),
    });

    return () => {
      onProviderResponseUpdatedSubscription.unsubscribe();
    };
  }, [dispatch, sosEvents]);

  useEffect(() => {
    if (!profile) return;
    if (!requesters || requesters.length === 0) return;
    if (!providers || providers.length === 0) return;
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
        if (createdProviderResponse) {
          const currProvider = providers.find(
            (provider) =>
              provider.id === createdProviderResponse.providerResponseProviderId
          );
          switch (createdProviderResponse.status) {
            case ProviderResponseStatus.UNSEEN:
              currSosEvent.unseen.push(
                currProvider.firstName + " " + currProvider.lastName
              );
              break;
            case ProviderResponseStatus.SEEN:
              currSosEvent.seen.push(
                currProvider.firstName + " " + currProvider.lastName
              );
              break;
            case ProviderResponseStatus.APPROVED_OUT:
              currSosEvent.approvedOut.push(
                currProvider.firstName + " " + currProvider.lastName
              );
              break;
            case ProviderResponseStatus.APPROVED_DEST:
              currSosEvent.approvedDest.push(
                currProvider.firstName + " " + currProvider.lastName
              );
              break;
          }

          dispatch({
            type: "UPDATE_SOS_EVENT",
            payload: currSosEvent,
          });
        }
      },
      error: (error) => console.log("Failed to updated sos event"),
    });

    return () => {
      onProviderResponseCreatedSubscription.unsubscribe();
    };
  }, [dispatch, sosEvents]);

  return { sosEvents };
};

export default useSosEvents;
