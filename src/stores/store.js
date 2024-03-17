import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use local storage

import rootReducer from "../reducer/rootReducer";
import { legacy_createStore as createStore } from "redux"; // Use regular createStore

const persistConfig = {
  key: "root",
  storage, // Use local storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
