import logo from "./logo.svg";
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} />
      <div className={styles.loginBlock}>
        {props.isAuth ? props.login 
        : <NavLink to={'/login'}>Login</NavLink> }
        
        </div>
    </header>
  )
}

export default Header;