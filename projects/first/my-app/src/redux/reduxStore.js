import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
})

let store = legacy_createStore(reducers);

export default store;

