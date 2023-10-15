import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to='/profile/29915' className={navData => navData.isActive ? styles.active : styles.a}>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/dialogs' className={navData => navData.isActive ? styles.active : styles.a}>Messages</NavLink>
      </div>
      <div className={styles.item}><a >News</a></div>
      <div className={styles.item}><a>Music</a></div>
      <div className={styles.item}><a>Settings</a></div>
      <div className={styles.item}>
        <NavLink to='/users' className={navData => navData.isActive ? styles.active : styles.a}>Users</NavLink>
      </div>
      <div className={styles.item}>
      <NavLink to='/photos' className={navData => navData.isActive ? styles.active : styles.a}>Photos, лучше не заходить</NavLink></div>
    </nav>
  )
}

export default Navbar;