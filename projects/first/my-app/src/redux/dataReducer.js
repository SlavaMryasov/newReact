import { profileRequest, getUserStatus, updateUserStatus } from '../api/api'
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_POSTS = 'SET_POSTS';
const ADD_POST = 'ADD_POST';

export let postsData = [
  { id: 1, message: 'Hi! How are you?', likesCount: 2 },
  { id: 2, message: 'it is my first post!', likesCount: 3 },
  { id: 3, message: 'shikaka!', likesCount: 5 },
]


let initialStore = {
  aboutMe: "I am banana",
  fullName: "Slava Mryasov",
  photos: {
    large: null,
    small: null,
  },
  status: ' _default status',
  postsData: []
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
      return{
        ...state,
        postsData: action.postsData
      }
    }
    case ADD_POST: {
      let newPost = {id:4, message:newPost, likesCount: 2}
      console.log(newPost, 'act')
      return{
        ...state,
        postsData: [...state.postsData, newPost]
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

export const addPost = (newPost) => ({
  type: ADD_POST,
  newPost
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
