const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.data, // в экшене создаем объект дата, сюда закинем id email login
        isAuth: true
      }
    }
    default: return state
  }
}


export const setAuthUserData = (id, email, login) => ({
  type: SET_AUTH_USER_DATA, data: { id, email, login }
})

export default authReducer;