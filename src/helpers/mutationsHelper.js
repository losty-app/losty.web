import { API, graphqlOperation } from "aws-amplify";
import { createUser, updateUser, deleteUser } from "../graphql/mutations";

export const createUserMutation = async (newUser) => {
  try {
    await API.graphql(graphqlOperation(createUser, { input: newUser }));
  } catch (e) {
    console.error("createUserMutation:", e);
    throw new Error(e);
  }
};

export const deleteUserMutation = async (user) => {
  try {
    await API.graphql(graphqlOperation(deleteUser, { input: user }));
  } catch (e) {
    console.error("deleteUserMutation:", e);
    throw new Error(e);
  }
};

export const updateUserMutation = async (updatedUser) => {
  try {
    await API.graphql(graphqlOperation(updateUser, { input: updatedUser }));
  } catch (e) {
    console.log("updateUserMutation: ", e);
    throw new Error(e);
  }
};
