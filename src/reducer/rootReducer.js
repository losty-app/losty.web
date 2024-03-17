import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import sosEventsReducer from "./sosEventsReducer";
import walkthroughReducer from "./walkthroughReducer";
import requestersReducer from "./requestersReducer";

const rootReducer = combineReducers({
  walkthrough: walkthroughReducer,
  profile: profileReducer,
  requesters: requestersReducer,
  sosEvents: sosEventsReducer,
});

export default rootReducer;
