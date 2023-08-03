import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  usersPage: usersReducer
})

let store = legacy_createStore(reducers);

export default store;

