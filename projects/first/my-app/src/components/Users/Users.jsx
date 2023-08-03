import styles from './Users.module.css'

const Users = (props) => {
  let st = props.usersPage.users.map(user => user.name)
  let changeStatus = (event) => {
    let text = event.target.value
    console.log(text)
    if (text === false) {
      props.unfollow(text)
    }
    else {
      props.follow(text)
    }

  }
  return (
    <div>
      {
        props.usersPage.users.map(user =>
          <div className={styles.users}>< button onClick={changeStatus} value={user.followed} >{user.followed === true ? 'follow' : 'unfollow'}</button><div>{user.name}</div></div>

        )

      }

    </div >
  )
}

export default Users;