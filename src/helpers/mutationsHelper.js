import { API, graphqlOperation } from 'aws-amplify';
import { createUser, updateUser, deleteUser } from '../graphql/mutations';
import { createGroup } from '../graphql/mutations';
import { createEventParticipant } from '../graphql/mutations';
import { createEvent } from '../graphql/mutations';

export const createUserMutation = async (newUser) => {
  try {
    await API.graphql(graphqlOperation(createUser, { input: newUser }));
  } catch (e) {
    console.error('createUserMutation:', e);
    throw new Error(e);
  }
};

export const deleteUserMutation = async (user) => {
  try {
    await API.graphql(graphqlOperation(deleteUser, { input: user }));
  } catch (e) {
    console.error('deleteUserMutation:', e);
    throw new Error(e);
  }
};

export const updateUserMutation = async (updatedUser) => {
  try {
    await API.graphql(graphqlOperation(updateUser, { input: updatedUser }));
  } catch (e) {
    console.log('updateUserMutation: ', e);
    throw new Error(e);
  }
};

export const createGroupMutation = async (newGroup) => {
  try {
    await API.graphql(graphqlOperation(createGroup, { input: newGroup }));
  } catch (e) {
    console.error('createGroupMutation:', e);
    throw new Error(e);
  }
};

export const createEventMutation = async (newEvent) => {
  try {
    await API.graphql(graphqlOperation(createEvent, { input: newEvent }));
  } catch (e) {
    console.error('createEventMutation:', e);
    throw new Error(e);
  }
};

export const createEventParticipantMutation = async (newParticipant) => {
  try {
    await API.graphql(graphqlOperation(createEventParticipant, { input: newParticipant }));
  } catch (e) {
    console.error('createEventParticipantMutation:', e);
    throw new Error(e);
  }
};
