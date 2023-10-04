import styles from './MyProfile.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus';

const MyProfile = (props) => {
  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img src={props.photos.large !== null ? props.photos.large : 'https://avatarko.ru/img/kartinka/33/igra_Minecraft_solncezaschitnye_34385.jpg'} />
      </div>

      <div className={styles.description}>
        <div>{props.fullName}</div>
        <div>{props.aboutMe}</div>
      </div>
      <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
    </div>
  )
}

export default MyProfile;