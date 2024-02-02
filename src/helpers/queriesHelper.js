import { API, graphqlOperation } from "aws-amplify";

// User Queries
import {
  listUsers,
  getUser,
  usersByTel,
  listSosEvents,
  listRequesters,
  providerResponsesBySosEventId,
  listProviders,
} from "../graphql/queries";

export const listAllSosEventsByRequesterIds = async (requesterIds) => {
  try {
    await API.graphql(
      graphqlOperation(listSosEvents, {
        filter: {
          sosEventSentById: {
            in: requesterIds, // Filter requesters where the ID is in the list of requesterIds
          },
        },
      })
    );
  } catch (e) {
    console.log("listAllSosEventsByAssociationIdMutation: ", e);
    throw new Error(e);
  }
};

export const listAllProviderResponsesBySosEventId = async (sosEventId) => {
  try {
    await API.graphql(
      graphqlOperation(providerResponsesBySosEventId, { sosEventId })
    );
  } catch (e) {
    console.log("listAllProviderResponsesBySosEventId: ", e);
    throw new Error(e);
  }
};

export const listAllRequestersByAssociationId = async (associationId) => {
  try {
    await API.graphql(
      graphqlOperation(listRequesters, {
        filter: { associationId: { eq: associationId } },
      })
    );
  } catch (e) {
    console.log("listAllRequestersByAssociationId: ", e);
    throw new Error(e);
  }
};

export const findProviderByPhoneNumber = async (tel) => {
  try {
    // Check if a provider with the same tel already exists
    const result = await API.graphql(
      graphqlOperation(listProviders, { filter: { tel: { eq: tel } } })
    );
    const providers = result.data.items;
    if (providers?.length > 0) {
      return providers[0];
    }
    return null;
  } catch (e) {
    console.log("findProviderByPhoneNumber: ", e);
    throw new Error(e);
  }
};
