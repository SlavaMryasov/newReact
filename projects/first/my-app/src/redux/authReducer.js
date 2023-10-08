import { loginRequest } from "../api/api";

const SET_AUTH_ME = 'SET_AUTH_ME';
const SET_LOGIN  = 'SET_LOGIN';

let initialStore = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    data: null
}

const authReducer = (state = initialStore, action) => {
    switch(action.type) {
        case SET_AUTH_ME: 
            return{
                ...state,
                ...action.data,
                isAuth: true
            }
            case SET_LOGIN: 
            return{
                ...state,
                ...action.data
            } 
        default: return state;
    }
}

export const setAuthUserData = (id, email, login) => ({
    type: SET_AUTH_ME, data: {id, email, login}
});

export const setLogin = (data) => ({
    type: SET_LOGIN, data
})

export const postLoginTC =(data)=> {
    return (dispatch) => {
        loginRequest(data).then(response =>{
            dispatch(setLogin(data))
        })
    }
}

export default authReducer;
