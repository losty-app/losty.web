const initialState = null;

const lastSyncTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LAST_SYNC_TIME":
      return action.payload;
    default:
      return state;
  }
};

export default lastSyncTimeReducer;
