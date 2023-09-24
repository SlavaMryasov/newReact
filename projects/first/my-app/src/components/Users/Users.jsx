import styles from './Users.module.css'
import me from './Untitled.png'
import Loader from '../presets/Loader'
import { NavLink, Navigate } from 'react-router-dom'


let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
 if (!props.isAuth) return <Navigate to='../login'/>
  return <div>
    {props.pending === true ? <Loader /> : null}
    {
      props.users.map(user => <div key={user.id}>
        <div >
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img src={user.photos.small !== null ? user.photos.small : me} className={styles.img} />
            </NavLink>
          </div>
          <span>
            {user.followed
              ? <button disabled={props.requestIsActive.some(el => el.userId == user.id ? true : false)} onClick={() => {
                props.unfollow(user.id)

              }}>UnFollow</button>
              : <button disabled={props.requestIsActive.some(el => el.userId == user.id ? true : false)} onClick={() => {
                props.follow(user.id) // здесь сосредоточена логика запросов и диспатчей(смотреть usersReducer)
              }}>Follow</button>}
          </span>
        </div>
        <div>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <span>{'user.location.country'} </span>
            <span>{'user.location.city'}</span>
          </span>
        </div>
      </div>)
    }
    <div className={styles.boxForPages}>
      {pages.map(page => <span onClick={() => props.onChangePage(page)}
        className={page === props.currentPage ? styles.selectedPage : styles.unselectedPage} key={page}>{page}</span>)}
    </div>
  </div>
}

export default Users;



