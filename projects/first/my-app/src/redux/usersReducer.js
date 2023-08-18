import me from './Untitled.png'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLOWW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';

let initialStore = {
  users: [],
  totalUsersCount: 0,
  currentPage: 9,
  pageSize: 5
}

const usersReducer = (state = initialStore, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user;
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state, users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user;
        })
      }
    }
    case SET_USERS: {
      return {
        ...state, users: action.users
      }
    }

    case SET_USERS_TOTAL_COUNT: {
      return {
        ...state, totalUsersCount: action.totalUsersCount
      }
    }

    default: return state
  }
}




export const followAC = (userId) => ({
  type: FOLLOW, userId
})

export const unfollowAC = (userId) => ({
  type: UNFOLLOW, userId
})
export const setUsersAC = (users) => ({
  type: SET_USERS, users
})
export const setUsersTotalCountAC = (usersCount) => ({
  type: SET_USERS_TOTAL_COUNT, totalUsersCount: usersCount
})


export default usersReducer;