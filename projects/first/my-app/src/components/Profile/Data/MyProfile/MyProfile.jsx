import styles from './MyProfile.module.css'

const MyProfile = (props) => {
  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img src='https://avatarko.ru/img/kartinka/33/igra_Minecraft_solncezaschitnye_34385.jpg' />
      </div>
      <div className={styles.description}>
        <div>{props.aboutMe}</div>
      </div>
    </div>
  )
}

export default MyProfile;