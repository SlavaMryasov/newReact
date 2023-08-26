import { combineReducers, legacy_createStore } from "redux";
import dataReducer from "./dataReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  profilePage: dataReducer
})

let store = legacy_createStore(reducers);

export default store;

