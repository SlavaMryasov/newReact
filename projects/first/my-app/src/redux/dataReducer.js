
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialStore = {
  aboutMe: 'I am banana',
  fullName: 'Slava Mryasov',
}

const dataReducer = (state = initialStore, action) => {
  switch (action.type) {

    case SET_USER_PROFILE: {
      return {
        ...state, aboutMe: action.user.aboutMe
      }
    }
    default: return state
  }
}





export const setUser = (user) => ({
  type: SET_USER_PROFILE, user
})



export default dataReducer;