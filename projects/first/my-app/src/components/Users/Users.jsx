import styles from './Users.module.css'
import me from './Untitled.png'
import axios from 'axios'
import React from 'react'

class Users extends React.Component {
  // constructor(props){ Конструктор можно не писать, если передаются только пропсы, реакт сделает это автоматом
  //   super(props);
  // }
  //?page=1&&pageSize=3
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?page=33&count=5').then(response => {
      this.props.setUsers(response.data.items)
    });
  }
  render() { // рендер обязательно есть у классовой компоненты

    let pagesCount = this.props.totalUsersCount / this.props.pageSize;

    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(i)
    }


    return <div>
      <div >{pages.map(page => <span className={this.props.currentPage === page ? styles.unselectedPage : styles.selectedPage}>{page}</span>)}</div>
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