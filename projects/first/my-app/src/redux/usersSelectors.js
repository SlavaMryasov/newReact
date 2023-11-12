import { createSelector } from "reselect"

export const getUsers = (state) => { // 
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsers, (users)=>{ // первым параметром прокидываем селектор с получением юзеров
return users.filter(u=> true)

})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getPending = (state) => {
    return state.usersPage.pending
}

export const getRequestIsActive = (state) => {
    return state.usersPage.requestIsActive
}


