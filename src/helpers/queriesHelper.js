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
import { ProviderType } from "src/models";

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
    console.log(e);
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

export const findAdminByPhoneNumber = async (tel) => {
  try {
    const newTel = tel.replace(/^\+\d{1,3}/, "0");
    const result = await API.graphql(
      graphqlOperation(listProviders, {
        filter: {
          tel: {
            eq: newTel,
          },
          providerType: {
            eq: ProviderType.ADMIN,
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
