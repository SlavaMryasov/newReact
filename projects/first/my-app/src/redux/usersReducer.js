const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLOWW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_STATUS = 'CHANGE_STATUS';

let initialStore = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 5,
  pending: false
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

    case CHANGE_PAGE: {
      return {
        ...state, currentPage: action.currentPage
      }
    }

    case CHANGE_STATUS: {
      return {
        ...state, pending: action.pending
      }
    }

    default: return state
  }
}




export const follow = (userId) => ({
  type: FOLLOW, userId
})

export const unfollow = (userId) => ({
  type: UNFOLLOW, userId
})
export const setUsers = (users) => ({
  type: SET_USERS, users
})
export const setUsersTotalCount = (usersCount) => ({
  type: SET_USERS_TOTAL_COUNT, totalUsersCount: usersCount
})
export const changePage = (currentPage) => ({
  type: CHANGE_PAGE, currentPage
})
export const changeStatus = (pending) => ({
  type: CHANGE_STATUS, pending
})


export default usersReducer;