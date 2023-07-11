import styles from './Profile.module.css'
import Data from './Data/Data';

const Profile = () => {
  return (
    <div className={styles.content}>
      <Data />
    </div>
  )
}

export default Profile;