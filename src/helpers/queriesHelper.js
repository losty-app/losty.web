import { API, graphqlOperation } from 'aws-amplify';

// User Queries
import { listUsers, getUser, usersByTel } from '../graphql/queries';

// Event Queries
import { getEvent } from '../graphql/queries';

// Event Participant Queries
import { listEventParticipants, getEventParticipant } from '../graphql/queries';

// Group Queries
import { listGroups, getGroup } from '../graphql/queries';
import { getEventsQuery } from './customQueries';

export const listAllUsers = async () => {
  try {
    const usersData = await API.graphql(graphqlOperation(listUsers));
    return usersData.data.listUsers.items;
  } catch (e) {
    console.error('listAllUsers:', e);
    throw new Error(e);
  }
};

export const getUserById = async (userId) => {
  try {
    const userData = await API.graphql(graphqlOperation(getUser, { id: userId }));
    return userData.data.getUser;
  } catch (e) {
    console.error('getUserById:', e);
    throw new Error(e);
  }
};

export const listAllGroups = async () => {
  try {
    const groupsData = await API.graphql(graphqlOperation(listGroups));
    return groupsData.data.listGroups.items;
  } catch (e) {
    console.error('listAllGroups:', e);
    throw new Error(e);
  }
};

export const getGroupById = async (groupId) => {
  try {
    const groupData = await API.graphql(graphqlOperation(getGroup, { id: groupId }));
    return groupData.data.getGroup;
  } catch (e) {
    console.error('getGroupById:', e);
    throw new Error(e);
  }
};

export const listAllEvents = async (userId) => {
  try {
    const eventsData = await API.graphql(
      graphqlOperation(getEventsQuery, {
        filter: { userId: { eq: userId } },
      }),
    );
    const eventParticipants = eventsData.data.listEventParticipants.items;
    // Extract and return only the event objects
    const events = eventParticipants.map((item) => item.event);
    return events;
  } catch (e) {
    console.error('listAllEvents:', e);
    throw new Error(e);
  }
};

export const getEventById = async (eventId) => {
  try {
    const eventData = await API.graphql(graphqlOperation(getEvent, { id: eventId }));
    return eventData.data.getEvent;
  } catch (e) {
    console.error('getEventById:', e);
    throw new Error(e);
  }
};

export const listAllEventParticipants = async () => {
  try {
    const participantsData = await API.graphql(graphqlOperation(listEventParticipants));
    return participantsData.data.listEventParticipants.items;
  } catch (e) {
    console.error('listAllEventParticipants:', e);
    throw new Error(e);
  }
};

export const getEventParticipantById = async (participantId) => {
  try {
    const participantData = await API.graphql(
      graphqlOperation(getEventParticipant, { id: participantId }),
    );
    return participantData.data.getEventParticipant;
  } catch (e) {
    console.error('getEventParticipantById:', e);
    throw new Error(e);
  }
};

export const findUserByPhoneNumber = async (tel) => {
  try {
    // Check if a user with the same tel already exists
    const result = await API.graphql(graphqlOperation(usersByTel, { tel }));
    const users = result.data.usersByTel.items;
    if (users?.length > 0) {
      return users[0];
    }
    return null;
  } catch (e) {
    console.log('findUserByPhoneNumber: ', e);
    throw new Error(e);
  }
};
