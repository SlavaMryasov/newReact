import styles from './Users.module.css'
import me from './Untitled.png'
import Loader from '../presets/Loader'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

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
            <NavLink to={'/profile/' + user.id}>
              <img src={user.photos.small !== null ? user.photos.small : me} className={styles.img} />
              </NavLink>
          </div>
          <span>
            {user.followed
              ? <button onClick={() => { 
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                 {withCredentials: true, 'API-KEY': 'ce79cb97-503f-47ad-acea-165cf07d55d2'})
                .then(response =>{
                  if(response.data.resultCode === 0){
                    props.unfollow(user.id) 
                  }
                })
                
              }}>UnFollow</button>
              : <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                 {withCredentials: true, 'API-KEY': 'ce79cb97-503f-47ad-acea-165cf07d55d2'})
                .then(response =>{
                  if(response.data.resultCode === 0){
                    props.follow(user.id) 
                  
                  }
                })
                

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