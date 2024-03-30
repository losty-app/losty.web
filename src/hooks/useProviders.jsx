import { API, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCreateProvider } from "src/graphql/subscriptions";
import { listAllProvidersByAssociationId } from "src/helpers/queriesHelper";

const useProviders = (callFrom = "") => {
  const dispatch = useDispatch();
  const providers = useSelector((state) => state.providers);
  const profile = useSelector((state) => state.profile);

  const fetchProviders = async () => {
    try {
      const fetchedProviders = await listAllProvidersByAssociationId(
        profile.associationId
      );
      dispatch({ type: "SET_PROVIDERS", payload: fetchedProviders });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!profile) return;
    // Fetch providers if not available in Redux
    if (!providers || providers?.length === 0 || callFrom === "HOME") {
      fetchProviders();
    }
  }, []);

  useEffect(() => {
    if (!profile) return;
    if (!providers || providers.length === 0) return;

    // Subscribe to updated providers
    const onProviderUpdatedSubscription = API.graphql(
      graphqlOperation(onCreateProvider, {
        filter: {
          associationId: {
            eq: profile.associationId, // Filter providers where the ID is in the list of providerIds
          },
        },
      })
    ).subscribe({
      next: ({ value }) => {
        const createdProvider = value.data.onUpdateProvider;
        if (createdProvider) {
          dispatch({
            type: "SET_PROVIDERS",
            payload: [createdProvider, ...providers],
          });
        }
      },
      error: (error) => console.error(error),
    });

    return () => {
      onProviderUpdatedSubscription.unsubscribe();
    };
  }, [dispatch, providers]);

  return { providers };
};

export default useProviders;
