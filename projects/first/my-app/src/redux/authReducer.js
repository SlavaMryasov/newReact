const SET_AUTH_ME = 'SET_AUTH_ME';

let initialStore = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialStore, action) => {
    switch(action.type) {
        case SET_AUTH_ME: 
            return{
                ...state,
                ...action.data,
                isAuth: true

            }
        default: return state;
    }
}

export const setAuthUserData = (id, email, login) => ({
    type: SET_AUTH_ME, data: {id, email, login}
});

export default authReducer;