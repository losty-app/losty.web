import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import eventsReducer from "./eventsReducer";
import walkthroughReducer from "./walkthroughReducer";

const rootReducer = combineReducers({
  walkthrough: walkthroughReducer,
  profile: profileReducer,
  events: eventsReducer,
});

export default rootReducer;
