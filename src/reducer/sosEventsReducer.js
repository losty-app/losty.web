const initialState = [];

const sosEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SOS_EVENTS":
      return action.payload;
    case "UPDATE_SOS_EVENT":
      // Find the project to update in the array
      const updatedSosEvent = action.payload;
      const updatedSosEvents = state.map((sosEvent) =>
        sosEvent.id === updatedSosEvent.id ? updatedSosEvent : sosEvent
      );
      return updatedSosEvents;

    default:
      return state;
  }
};

export default sosEventsReducer;
