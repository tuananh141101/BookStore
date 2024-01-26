import { createStore, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers/rootReducers";

const compostedEnhancers = composeWithDevTools();

const store = createStore(rootReducers, compostedEnhancers);

export default store;
