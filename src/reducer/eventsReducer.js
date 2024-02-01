const initialState = [];

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return action.payload;
    case 'UPDATE_EVENT':
      // Find the project to update in the array
      const updatedEvent = action.payload;
      const updatedEvents = state.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event,
      );
      return updatedEvents;

    default:
      return state;
  }
};

export default eventsReducer;
