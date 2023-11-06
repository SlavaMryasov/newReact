import { loginRequest } from "../api/api";

const SET_AUTH_ME = 'SET_AUTH_ME';
const SET_LOGIN  = 'SET_LOGIN';

let initialStore = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    userId: null,
    openSettings: false
}

const authReducer = (state = initialStore, action) => {
    switch(action.type) {
        case SET_AUTH_ME:
            return{
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        default: return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_ME, data: {id, email, login}, isAuth
});


export const postLoginTC =(data)=> {
    return (dispatch) => {
        loginRequest(data.login, data.password, data.rememberMe).then(response =>{
            dispatch(setAuthUserData(response))
        })
    }
}

export default authReducer;
