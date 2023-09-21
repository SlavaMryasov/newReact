import { photosRequest} from '../api/api'
const SET_PHOTOS = 'SET_PHOTOS';
const SET_PHOTOS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_STATUS = 'CHANGE_STATUS';


let initialStore = {
  photos: [], // user
  totalPhotosCount: 0,//totalUsersCount
  currentPage: 1,
  pageSize: 100,
  pending: false,
  requestIsActive: []
}

const photosReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_PHOTOS: {
      return {
        ...state, photos: action.users
      }
    }

    case SET_PHOTOS_TOTAL_COUNT: {
      return {
        ...state, totalPhotosCount: action.totalUsersCount
      }
    }

    case CHANGE_PAGE: {
      console.log(action, 'act')
      return {
        ...state, currentPage: action.currentPage +1
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


export const setPhotos = (users) => ({
  type: SET_PHOTOS, users
})
export const setPhotosTotalCount = (usersCount) => ({
  type: SET_PHOTOS_TOTAL_COUNT, totalUsersCount: usersCount
})
export const changePage = (currentPage) => ({
  type: CHANGE_PAGE, currentPage
})
export const changeStatus = (pending) => ({
  type: CHANGE_STATUS, pending
})


export const getPhotosThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
   dispatch(changeStatus(true))
  photosRequest(currentPage, pageSize).then(data => {
    dispatch(setPhotos(data.items));
    dispatch(setPhotosTotalCount(data.totalCount));
    dispatch(changeStatus(false));
  })
}}

export default photosReducer;



