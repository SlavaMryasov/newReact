import styles from './Data.module.css'
import MyProfile from './MyProfile/MyProfile';
import PostsContainer from './Posts/PostsContainer';

const Data = (props) => {
  return (
    <div>
      <div className={styles.img}>
        <img className={styles.background} src="https://fullhdoboi.ru/wp-content/uploads/_ph/6/283114741.jpg" />
      </div>
      <div className={styles.data}>
        <MyProfile userId={props.userId} aboutMe={props.aboutMe} fullName={props.fullName} photos={props.photos} status={props.status} updateUserStatus={props.updateUserStatus}/>
        <PostsContainer />
      </div>
    </div>
  )
}

export default Data;