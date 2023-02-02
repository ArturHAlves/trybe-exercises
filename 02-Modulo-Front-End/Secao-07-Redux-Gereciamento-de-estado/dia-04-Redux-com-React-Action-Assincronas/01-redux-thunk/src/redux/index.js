import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;