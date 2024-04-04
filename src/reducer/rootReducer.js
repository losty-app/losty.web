import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import sosEventsReducer from "./sosEventsReducer";
import walkthroughReducer from "./walkthroughReducer";
import requestersReducer from "./requestersReducer";
import providersReducer from "./providersReducer";
import lastSyncTimeReducer from "./lastSyncTimeReducer";

const rootReducer = combineReducers({
  walkthrough: walkthroughReducer,
  profile: profileReducer,
  requesters: requestersReducer,
  providers: providersReducer,
  sosEvents: sosEventsReducer,
  lastSyncTime: lastSyncTimeReducer,
});

export default rootReducer;
