import { profileRequest, getUserStatus, updateUserStatus } from '../api/api'
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_POSTS = 'SET_POSTS'

let initialStore = {
  aboutMe: "I am banana",
  fullName: "Slava Mryasov",
  photos: {
    large: null,
    small: null,
  },
  status: ' _default status',
  postsData : [
    { id: 1, message: 'Hi! How are you?', likesCount: 2 },
    { id: 2, message: 'it is my first post!', likesCount: 3 },
    { id: 3, message: 'shikaka!', likesCount: 5 },
  ]
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
    case SET_POSTS: {
      console.log(action.postsData, 'case setPost')
      return{
        ...state,
        postsData: action.postsData
      }
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

export const setPosts =(postsData)=> ({
  type: SET_POSTS,
  postsData 
})



export const profileRequestTC = (userId) => {
  return (dispatch) => {
    profileRequest(userId).then(response => {
      dispatch(setUser(response.data));
    })
  }
}

export const getUserStatusTC = (userId) => {
  return (dispatch) => {
    getUserStatus(userId).then(response => {
      dispatch(setUserStatus(response.data));
    })
  }
}

export const updateUserStatusTC = (status) => {
  return (dispatch) => {
    updateUserStatus(status).then(response => {
      if(response.data.resultCode === 0){
        dispatch(setUserStatus(status));
      }
    })
  }
}


export default dataReducer;
