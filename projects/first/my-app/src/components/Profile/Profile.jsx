import styles from './Profile.module.css'
import DataContainer from './Data/DataContainer';

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <DataContainer {...props} />
    </div>
  )
}

export default Profile;