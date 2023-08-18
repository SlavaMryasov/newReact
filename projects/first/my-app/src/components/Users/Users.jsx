import styles from './Users.module.css'
import me from './Untitled.png'
import React from 'react'
import axios from 'axios'

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    })
  }


  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return <div>
      <div className={styles.boxForPages}>
        {pages.map(page => <span className={page === this.props.currentPage ? styles.selectedPage : styles.unselectedPage} key={page}>{page}</span>)}
      </div>
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