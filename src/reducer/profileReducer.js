const initialState = null;

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return action.payload;
    case "UPDATE_PROFILE":
      return {
        ...state, // Spread the previous state
        ...action.payload, // Spread the updated properties
      };
    case "SIGN_OUT":
      return null;
    default:
      return state;
  }
};

export default profileReducer;
