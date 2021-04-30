import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./reducer.auth";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth,
});

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default persistReducer(persistConfig, rootReducer);
