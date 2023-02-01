import { combineReducers } from "redux";
import dogReducer from "./dogReducer";

const rootReducers = combineReducers({
  dogReducer,
})

export default rootReducers