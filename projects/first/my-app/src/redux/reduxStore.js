import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  profilePage: dataReducer,
  auth: authReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

