import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
<<<<<<< HEAD
import thunkMiddleware from 'redux-thunk'
import photosReducer from "./photosReducer";
=======
import thunkMiddleware from 'redux-thunk' // промежуточный уровень внедряемы в стор
>>>>>>> f3715ce1d6b9134d288f714c8e4a37674d7eaa6c

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  profilePage: dataReducer,
  auth: authReducer,
  photosPage: photosReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));// applyMiddleware прими промежуточные слои,
// суем в конвейер    Клик(деиствие в UI) -->ОБРАБОТКА АСИНХРОНЩИНЫ САНКОЙ --> Создание Экшена --> Диспатч(пробрасывание) экшена в редьюсер 

export default store;

