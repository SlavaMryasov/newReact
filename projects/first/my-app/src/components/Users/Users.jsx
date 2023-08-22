import styles from './Users.module.css'
import me from './Untitled.png'
import Loader from '../presets/Loader'

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div>
    {props.pending === true ? <Loader /> : null}
    {
      props.users.map(user => <div key={user.id}>
        <div >
          <div>
            <img src={user.photos.small !== null ? user.photos.small : me} className={styles.img} />
          </div>
          <span>
            {user.followed
              ? <button onClick={() => { props.unfollow(user.id) }}>UnFollow</button>
              : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
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