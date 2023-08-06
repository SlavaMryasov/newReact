import styles from './Users.module.css'
import me from './Untitled.png'
import axios from 'axios'
const Users = (props) => {

  if(props.users.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
     
      props.setUsers(response.data.items) 
    });

    
  }

  return <div>
    {
      props.users.map (user => <div key={user.id}>
        <div >
          <div>
            <img src={user.photos.small !== null ? user.photos.small : me}  className={styles.img}/>
          </div>
          <span>
            {user.followed 
            ? <button onClick={()=>{props.unfollow(user.id)}}>UnFollow</button>
            :<button onClick={()=>{props.follow(user.id)}}>Follow</button>}
            
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
  </div>
}
export default Users;