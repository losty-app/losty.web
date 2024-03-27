const initialState = [];

const sosEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SOS_EVENTS":
      return action.payload;
    case "UPDATE_SOS_EVENT":
      const updatedSosEvent = action.payload;
      const isSosEventPresent = state.some(
        (sosEvent) => sosEvent.id === updatedSosEvent.id
      );

      if (!isSosEventPresent) {
        return [...state, updatedSosEvent];
      } else {
        const updatedSosEvents = state.map((sosEvent) =>
          sosEvent.id === updatedSosEvent.id
            ? { ...sosEvent, ...updatedSosEvent }
            : sosEvent
        );
        return updatedSosEvents;
      }
    default:
      return state;
  }
};

export default sosEventsReducer;
