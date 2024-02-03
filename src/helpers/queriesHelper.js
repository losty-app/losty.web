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
    const newTel = tel.replace(/^\+\d{1,3}/, "0");
    const result = await API.graphql(
      graphqlOperation(listProviders, {
        filter: {
          tel: {
            eq: newTel,
          },
        },
      })
    );
    const providers = result?.data?.listProviders?.items;
    if (providers?.length > 0) {
      return providers[0];
    }
    return null;
  } catch (e) {
    throw new Error(e);
  }
};
