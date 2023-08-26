import styles from './Profile.module.css'
import DataContainer from './Data/DataContainer';

const Profile = (props) => {
  console.log(props, 'ddd')
  return (
    <div className={styles.content}>
      <DataContainer {...props} />
    </div>
  )
}

export default Profile;