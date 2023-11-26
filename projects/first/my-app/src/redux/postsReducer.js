const SET_POSTS = 'SET_POSTS'

const initialStore = {
     postsData : [
        { id: 1, message: 'Hi! How are you?', likesCount: 2 },
        { id: 2, message: 'it is my first post!', likesCount: 3 },
        { id: 3, message: 'shikaka!', likesCount: 5 },
      ]
}

const postsReducer = (state = initialStore, action) => {
  switch (action.type){
    case SET_POSTS: {
      return{
        ...state,
        postsData: action.postsData
      }
    }
    default: return state
  }
}

export const setPosts = (postsData) => ({
  type: SET_POSTS,
   postsData,
});


export default postsReducer;