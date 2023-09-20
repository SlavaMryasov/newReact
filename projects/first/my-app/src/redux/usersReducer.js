import { usersRequest } from '../api/api';
import { unfollowRequest, followRequest } from '../api/api';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLOWW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_STATUS = 'CHANGE_STATUS';
const CHANGE_STATUS_REQUEST = 'CHANGE_STATUS_REQUEST';


let initialStore = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 5,
  pending: false,
  requestIsActive: []
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
    case CHANGE_STATUS_REQUEST: {
      return {
        ...state,
        // requestIsActive: [...state.requestIsActive, action.user],
        // requestIsActive: action.user.status !== true ? [state.requestIsActive] : [...state.requestIsActive, action.user],
        requestIsActive: action.user.status ? [...state.requestIsActive, action.user] : [], // можно написать action.user.status === true
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
export const changeStatusRequest = (status, userId) => ({
  type: CHANGE_STATUS_REQUEST, user: { status, userId }
})

//ThunkCreator - это функция, которая может принимать данные-аргументы в параметры( вданном случае currentPage и pageSize)
// и которая возвращает санку,
//  Далее она не будет называться ThunkCreator - это детсад, назване будет по функционалу, типа getUsers

// actionCreator и thunkCreator - формально одно и тоже, только thunkCreator, может возвращать не только объекты, а еще и функцию,
// которую мы должны смочь задиспатчить 
export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(changeStatus(true))
    usersRequest(currentPage, pageSize).then(data => {
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
      dispatch(changeStatus(false));
    })
  }
}

export const unfollowTC = (userId) => {
  return (dispatch) => {
    dispatch(changeStatusRequest(true, userId))
    unfollowRequest(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId))
      }
      dispatch(changeStatusRequest(false, userId))
    })
  }
}

export const followTC = (userId) => {
  return (dispatch) => {
    dispatch(changeStatusRequest(true, userId))
    followRequest(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(userId))
      }
      dispatch(changeStatusRequest(false, userId))
    })
  }
}
export default usersReducer;


