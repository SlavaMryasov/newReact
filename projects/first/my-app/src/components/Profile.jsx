import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.content}>
      <div className={styles.img}>
        <img className={styles.background} src="https://fullhdoboi.ru/wp-content/uploads/_ph/6/283114741.jpg" />
      </div>
      <div className={styles.data}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img src='https://avatarko.ru/img/kartinka/33/igra_Minecraft_solncezaschitnye_34385.jpg' />
          </div>
          <div className={styles.description}>
            description
          </div>
        </div>
        <div className={styles.posts}>
          <div>My posts</div>
          <div><input></input></div>
          <button className={styles.send}>Send</button>
        </div>
        <div className={styles.message}>
          <div>hey, why nobody love me?</div>
          <div>It is our new programm</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;