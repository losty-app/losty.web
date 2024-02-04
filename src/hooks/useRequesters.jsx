import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onCreateRequesterProvider,
  onUpdateRequester,
} from "../graphql/subscriptions";
import { listAllRequestersByAssociationId } from "src/helpers/queriesHelper";

const useRequesters = (callFrom = "") => {
  const dispatch = useDispatch();
  const requesters = useSelector((state) => state.requesters);
  const profile = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(false);

  const fetchRequesters = async () => {
    try {
      setLoading(true);
      const fetchedRequesters = await listAllRequestersByAssociationId(
        profile.associationId
      );
      dispatch({ type: "SET_REQUESTERS", payload: fetchedRequesters });
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!requesters || requesters.length === 0 || callFrom === "HOME") {
          await fetchRequesters();
        }
      } catch (err) {
        console.log("Failed to fetch events");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!profile) return;
    // Subscribe to new requesters
    const onRequesterCreatedSubscription = API.graphql(
      graphqlOperation(onCreateRequesterProvider, {
        filter: { providerId: { eq: profile.id } },
      })
    ).subscribe({
      next: ({ value }) => {
        const newRequester = value?.data?.onCreateRequesterProvider?.requester;
        if (newRequester) {
          dispatch({
            type: "SET_REQUESTERS",
            payload: [newRequester, ...requesters],
          });
        }
      },
      error: (error) => console.error(error),
    });

    return () => {
      onRequesterCreatedSubscription.unsubscribe();
    };
  }, [dispatch, requesters]);

  useEffect(() => {
    if (!profile) return;
    if (!requesters || requesters.length === 0) return;

    const requesterIds = requesters.map((requester) => requester.id); // Extract requester IDs

    // Subscribe to updated requesters
    const onRequesterUpdatedSubscription = API.graphql(
      graphqlOperation(onUpdateRequester, {
        filter: {
          id: {
            in: requesterIds, // Filter requesters where the ID is in the list of requesterIds
          },
        },
      })
    ).subscribe({
      next: ({ value }) => {
        const updatedRequester = value.data.onUpdateRequester;
        // Dispatch or perform other actions here
        dispatch({
          type: "UPDATE_REQUESTER",
          payload: updatedRequester,
        });
      },
      error: (error) => console.error(error),
    });

    return () => {
      onRequesterUpdatedSubscription.unsubscribe();
    };
  }, [dispatch, requesters]);

  return {
    requesters,
    loading,
  };
};

export default useRequesters;
