import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootreducer from "./reducers";

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  rootreducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

export default { store, persistor };
