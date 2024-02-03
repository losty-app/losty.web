import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import sosEventsReducer from "./sosEventsReducer";
import walkthroughReducer from "./walkthroughReducer";

const rootReducer = combineReducers({
  walkthrough: walkthroughReducer,
  profile: profileReducer,
  sosEvents: sosEventsReducer,
});

export default rootReducer;
