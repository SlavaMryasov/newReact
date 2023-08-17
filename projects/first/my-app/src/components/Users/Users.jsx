import styles from './Users.module.css'
import me from './Untitled.png'
import React from 'react'
import axios from 'axios'

class Users extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?page=8&count=24').then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    })
  }
  pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)


  render() {
    for (let i = 1; i <= this.pageCount; i++) {
      this.props.currentPage.push(i)
    }
    return <div>
      <div>{this.props.currentPage.map(page => <span>page</span>)}</div>
      <div className={styles.boxForPages}>{this.props.pages}</div>
      {
        this.props.users.map(user => <div key={user.id}>
          <div >
            <div>
              <img src={user.photos.small !== null ? user.photos.small : me} className={styles.img} />
            </div>
            <span>
              {user.followed
                ? <button onClick={() => { this.props.unfollow(user.id) }}>UnFollow</button>
                : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>}

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

}

export default Users;