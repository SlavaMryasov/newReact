import logo from "./logo.svg";
import styles from './Header.module.css'
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
=======
import { NavLink } from "react-router-dom";
>>>>>>> refs/remotes/origin/dev

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} />
<<<<<<< HEAD
      <div className={styles.loginBlock}>
        {props.isAuth ? props.login 
        : <NavLink to={'/login'}>Login</NavLink> }
        
        </div>
=======
      <div className={styles.authBlock}>
        {props.isAuth ? props.login : <NavLink to='/login'>login</NavLink>}
      </div>
>>>>>>> refs/remotes/origin/dev
    </header>
  )
}

export default Header;