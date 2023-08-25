
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialStore = {

}

const dataReducer = (state = initialStore, action) => {
  switch (action.type) {
    
    case SET_USER_PROFILE: {
      return {
        ...state, users: action.user
      }
    }
    default: return state
  }
}





export const setUser = (user) => ({
  type: SET_USER_PROFILE, user
})



export default dataReducer;