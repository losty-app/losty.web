import { API, graphqlOperation } from "aws-amplify";
import { deleteProvider, updateProvider } from "../graphql/mutations";

export const deleteProviderMutation = async (provider) => {
  try {
    await API.graphql(graphqlOperation(deleteProvider, { input: provider }));
  } catch (e) {
    console.error("deleteUserMutation:", e);
    throw new Error(e);
  }
};

export const updateProviderMutation = async (updatedProvider) => {
  try {
    await API.graphql(
      graphqlOperation(updateProvider, { input: updatedProvider })
    );
  } catch (e) {
    console.log("updateProviderMutation: ", e);
    throw new Error(e);
  }
};
