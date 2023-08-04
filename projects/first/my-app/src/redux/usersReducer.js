const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  users: [
    { id: 1, name: 'Вася Пупкин', followed: true, quote: 'Welcome to the club, buddy!!!', country: 'Russia', city: 'Moscow' },
    { id: 2, name: 'Петя Кошкин', followed: false, quote: 'my english is wery well', country: 'Ukraine', city: 'Kiev' },
    { id: 3, name: 'Лена Полено', followed: true, quote: 'Я Лена, а также полено', country: 'Russia', city: 'Kirov' },
    { id: 4, name: 'Оля Икота', followed: true, quote: 'Картошка домашняя свежая - очень вкусная!', country: 'Belarus', city: 'Minsk' },
    { id: 5, name: 'Игорь Иванов', followed: true, quote: 'Gimi, Gimi, acha, acha', country: 'India', city: 'New-Dely' },
    { id: 6, name: 'Жанна Дарк', followed: false, quote: 'Ты была сожжена инквизиторами на кострееее', country: 'France', city: 'Domremy' },
  ]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        followed: { ...state.users.map(user => String(user.id) === action.userId ? user.followed = false :user.followed) }
        // users: [...state.users.map(user => user.followed = false)]
      }
    case UNFOLLOW:
      return {
        ...state,
        followed: { ...state.users.map(user => String(user.id) === action.userId ? user.followed = true :user.followed)  }
        // users: [...state.users.map(user => user.followed = true)]
      }
    default: return state
  }
}

export const followAC = (userId) => ({
  type: UNFOLLOW, userId
})

export const unFollowAC = (userId) => ({
  type: FOLLOW, userId
})

export default usersReducer;