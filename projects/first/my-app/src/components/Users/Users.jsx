import styles from './Users.module.css'

const Users = (props) => {

  let changeStatus = (event) =>{
    let status = event.target.value;
    let userId = event.target.id;

    if(status === 'true'){
      props.follow(userId)
      
    }
    else if(status === 'false'){
      props.unfollow(userId)
      
    }
    
  }
  let users = props.usersPage.users.map(user => <div key={user.id}><button id={user.id} 
    onClick={changeStatus} value={user.followed}>{user.followed === true ? 'follow' : 'unfollow'}</button>{user.name}</div>)
 
  return(
    <div>{users}</div>
  )
}

export default Users;