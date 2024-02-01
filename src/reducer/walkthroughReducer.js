const initialState = true;

const walkthroughReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WALKTHROUGH":
      return action.payload;
    default:
      return state;
  }
};

export default walkthroughReducer;
