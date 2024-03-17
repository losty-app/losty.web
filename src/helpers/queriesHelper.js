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

export const getSosEventsByRequesterId = async (requesterId) => {
  try {
    const result = await API.graphql(
      graphqlOperation(listSosEvents, {
        filter: {
          requesterId: {
            eq: requesterId, // Filter requesters where the ID is in the list of requesterIds
          },
        },
      })
    );

    return result.data.listSosEvents.items;
  } catch (e) {
    console.log("no result:");

    throw new Error(e);
  }
};

export const listAllProviderResponsesBySosEventId = async (sosEventId) => {
  try {
    const result = await API.graphql(
      graphqlOperation(providerResponsesBySosEventId, { sosEventId })
    );
    return result.data.providerResponsesBySosEventId.items;
  } catch (e) {
    console.log("listAllProviderResponsesBySosEventId: ", e);
    throw new Error(e);
  }
};

export const listAllRequestersByAssociationId = async (associationId) => {
  try {
    const result = await API.graphql(
      graphqlOperation(listRequesters, {
        filter: { associationId: { eq: associationId } },
      })
    );
    return result.data.listRequesters.items;
  } catch (e) {
    console.log("listAllRequestersByAssociationId: ", e);
    throw new Error(e);
  }
};

export const listAllProvidersByAssociationId = async (associationId) => {
  try {
    const result = await API.graphql(
      graphqlOperation(listProviders, {
        filter: { associationId: { eq: associationId } },
      })
    );
    return result.data.listProviders.items;
  } catch (e) {
    console.log("listAllProvidersByAssociationId: ", e);
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
