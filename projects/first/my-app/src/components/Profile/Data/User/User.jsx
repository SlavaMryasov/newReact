import styles from './User.module.css'

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img src='https://avatarko.ru/img/kartinka/33/igra_Minecraft_solncezaschitnye_34385.jpg' />
      </div>
      <div className={styles.description}>
        description
      </div>
    </div>
  )
}

export default User;