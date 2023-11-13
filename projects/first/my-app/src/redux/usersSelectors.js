import { createSelector } from "reselect"

export const getUsers = (state) => { // 
    return state.usersPage.users
}

// проверим, а изменился ли массив юзеров, если нет, то селектор перезапускать не будем, это проверит библиотека reselect.  Если не сделать этого, то может происходить постоянный ререндер


// функция createSelector создает реселектор, она принимает в качестве зависимостей простые селекты из стейта (селекты без сложных вычислений), 
// при первом вызове реселекта значения зависимостей кешируются внутри реселекта, а при следующих вызовах дергаются простые селекторы зависимости
//  и их  значения сравниваются с кешироваными!
// Если изменений по сравнению с кешем нет, то сразу возвращается кеншированный результат без запуска дорогого селектора,

// если же что-то из зависимостей изменилось в стейте по сравнению с кешем то тогда уже вызывается 
// селектор с дорогими вычислениями!
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


