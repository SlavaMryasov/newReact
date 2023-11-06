import axios from "axios"


const instance = axios.create({ // расширили наследуемый экземпляр объекта от аксиуса
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'ce79cb97-503f-47ad-acea-165cf07d55d2'
  }
})

//UsersContainer HeaderContainer
export const usersRequest = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
}


//Users

export const followRequest = (userId) => {
  return instance.post(`follow/${userId}`)
    .then(response => response.data)
}

export const unfollowRequest = (userId) => {
  return instance.delete(`follow/${userId}`)
    .then(response => response.data)
}

// HeaderContainer
export const authRequest = () => {
  return instance.get(`/auth/me`).then(response => response.data)
}


export const loginRequest = (email, password, rememberMe) => {
return instance.post(`/auth/login`, {email, password, rememberMe})
.then(response => response.data)
}

export const logoutRequest = () => {
  return instance.delete(`/auth/login`)
  .then(response => response.data)
}

//Photos
export const photosRequest = (currentPage = 1, pageSize = 100) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)


}

// DataContainer
export const profileRequest = (userId) => {
  return instance.get(`/profile/${userId}`)

}

export const getUserStatus = (userId) => {
  return instance.get(`/profile/status/${userId}`)
}

export const updateUserStatus = (status) => {
  return instance.put(`/profile/status`, {status:status})
}