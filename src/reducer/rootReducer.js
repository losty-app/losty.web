import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import sosEventsReducer from "./sosEventsReducer";
import walkthroughReducer from "./walkthroughReducer";
import requestersReducer from "./requestersReducer";
import providersReducer from "./providersReducer";

const rootReducer = combineReducers({
  walkthrough: walkthroughReducer,
  profile: profileReducer,
  requesters: requestersReducer,
  providers: providersReducer,
  sosEvents: sosEventsReducer,
});

export default rootReducer;
