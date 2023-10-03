import { profileRequest, getUserStatus } from '../api/api'
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialStore = {
  aboutMe: "I am banana",
  fullName: "Slava Mryasov",
  photos: {
    large: null,
    small: null,
  },
  status: 'default status'
};

const dataReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return {
        ...state,
        fullName: action.user.fullName,
        aboutMe: action.user.aboutMe,
        photos: action.user.photos,
      };
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    default:
      return state;
  }
};

export const setUser = (user) => ({
  type: SET_USER_PROFILE,
  user,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
status,
})

export const profileRequestTC = (userId) => {
  return (dispatch) => {
    profileRequest(userId).then(response => {
      dispatch(setUser(response.data));
    })
  }
}

export const setUserStatusTC = (userId) => {
  return (dispatch) => {
    getUserStatus(userId).then(response => {
      dispatch(setUserStatus(response.data));
    })
  }
}


export default dataReducer;
