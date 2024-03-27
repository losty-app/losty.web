const initialState = [];

const requestersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_REQUESTER":
      const updatedRequester = action.payload;
      const isRequesterPresent = state.some(
        (requester) => requester.id === updatedRequester.id
      );

      if (!isRequesterPresent) {
        // If the updatedRequester ID is not present, add it to the state array
        return [...state, updatedRequester];
      } else {
        // If the updatedRequester ID is present, update the corresponding requester
        const updatedRequesters = state.map((requester) =>
          requester.id === updatedRequester.id
            ? { ...requester, ...updatedRequester }
            : requester
        );
        return updatedRequesters;
      }
    case "REMOVE_REQUESTER":
      // Find the requester to remove in the array
      const removedRequester = action.payload;
      const updatedRequestersWithoutRemoved = state.filter(
        (requester) => requester.id !== removedRequester.id
      );
      return updatedRequestersWithoutRemoved;
    default:
      return state;
  }
};

export default requestersReducer;
