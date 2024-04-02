import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onCreateProviderResponse,
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
import {
  onCreateProviderResponseSubscription,
  onCreateSosEventSubscription,
  onUpdateProviderResponseSubscription,
  onUpdateSosEventSubscription,
} from "src/helpers/customSubscriptions";

const useSosEvents = (callFrom = "") => {
  const dispatch = useDispatch();
  const sosEvents = useSelector((state) => state.sosEvents);
  const requesters = useSelector((state) => state.requesters);
  const { providers } = useProviders("HOME");
  const profile = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(false);

  const fetchSosEvents = async () => {
    try {
      setLoading(true);
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

        // Reset isSOS for all requesters
        requesters.forEach(({ id, isSOS }) => {
          if (isSOS) {
            dispatch({
              type: "UPDATE_REQUESTER",
              payload: { id, isSOS: false },
            });
          }
        });

        fetchedSosEvents.forEach((sosEvent, index) => {
          const currRequester = requesters.find(
            (requester) => requester.id === sosEvent.requesterId
          );
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
    } finally {
      setLoading(false);
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
    if (!requesters || requesters.length === 0 || requesters.length > 5) return;

    const requesterIds = requesters.map((requester) => requester.id);

    // Subscribe to new providers
    const onSosEventCreatedSubscription = API.graphql(
      graphqlOperation(onCreateSosEventSubscription, {
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
    if (!requesters || requesters.length === 0 || requesters.length > 5) return;

    const requesterIds = requesters.map((requester) => requester.id);

    // onSosEventUpdatedSubscription
    const onSosEventUpdatedSubscription = API.graphql(
      graphqlOperation(onUpdateSosEventSubscription, {
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
    if (!requesters || requesters.length === 0 || requesters.length > 5) return;
    if (!providers || providers.length === 0) return;
    if (!sosEvents || sosEvents.length === 0) return;

    const sosEventsIds = sosEvents.reduce((acc, sosEvent) => {
      if (sosEvent.status === SosEventStatus.PENDING) {
        acc.push(sosEvent.id);
      }
      return acc;
    }, []);
    // Subscribe to updated providers
    const onProviderResponseUpdatedSubscription = API.graphql(
      graphqlOperation(onUpdateProviderResponseSubscription, {
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

          const fullName = currProvider.firstName + " " + currProvider.lastName;

          switch (updatedProviderResponse.status) {
            case ProviderResponseStatus.UNSEEN:
              if (!currSosEvent.unseen) {
                currSosEvent.unseen = [];
              }
              currSosEvent.unseen.push(fullName);
              break;
            case ProviderResponseStatus.SEEN:
              if (!currSosEvent.seen) {
                currSosEvent.seen = [];
              }
              currSosEvent.seen.push(fullName);
              break;
            case ProviderResponseStatus.APPROVED_OUT:
              if (!currSosEvent.approvedOut) {
                currSosEvent.approvedOut = [];
              }
              currSosEvent.approvedOut.push(fullName);
              break;
            case ProviderResponseStatus.APPROVED_DEST:
              if (!currSosEvent.approvedDest) {
                currSosEvent.approvedDest = [];
              }
              currSosEvent.approvedDest.push(fullName);
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
      onProviderResponseUpdatedSubscription.unsubscribe();
    };
  }, [dispatch, sosEvents]);

  useEffect(() => {
    if (!profile) return;
    if (!requesters || requesters.length === 0 || requesters.length > 5) return;
    if (!providers || providers.length === 0) return;
    if (!sosEvents || sosEvents.length === 0) return;

    const sosEventsIds = sosEvents.reduce((acc, sosEvent) => {
      if (sosEvent.status === SosEventStatus.PENDING) {
        acc.push(sosEvent.id);
      }
      return acc;
    }, []);

    // Subscribe to created provider responses
    const onProviderResponseCreatedSubscription = API.graphql(
      graphqlOperation(onCreateProviderResponseSubscription, {
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
          const currSosEvent = sosEvents.find(
            (sosEvent) => sosEvent.id === createdProviderResponse.sosEventId
          );
          const currProvider = providers.find(
            (provider) =>
              provider.id === createdProviderResponse.providerResponseProviderId
          );
          const fullName = currProvider.firstName + " " + currProvider.lastName;
          switch (createdProviderResponse.status) {
            case ProviderResponseStatus.UNSEEN:
              if (!currSosEvent.unseen) {
                currSosEvent.unseen = [];
              }
              currSosEvent.unseen.push(fullName);
              break;
            case ProviderResponseStatus.SEEN:
              if (!currSosEvent.seen) {
                currSosEvent.seen = [];
              }
              currSosEvent.seen.push(fullName);
              break;
            case ProviderResponseStatus.APPROVED_OUT:
              if (!currSosEvent.approvedOut) {
                currSosEvent.approvedOut = [];
              }
              currSosEvent.approvedOut.push(fullName);
              break;
            case ProviderResponseStatus.APPROVED_DEST:
              if (!currSosEvent.approvedDest) {
                currSosEvent.approvedDest = [];
              }
              currSosEvent.approvedDest.push(fullName);
              break;
          }

          dispatch({
            type: "UPDATE_SOS_EVENT",
            payload: currSosEvent,
          });
        }
      },
      error: (error) => console.log(error),
    });

    return () => {
      onProviderResponseCreatedSubscription.unsubscribe();
    };
  }, [dispatch, sosEvents]);

  return { sosEvents, fetchSosEvents, loading };
};

export default useSosEvents;
