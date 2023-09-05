import logo from "./logo.svg";
import styles from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} />
      <div className={styles.authBlock}>
        {props.isAuth ? props.login : <NavLink to='/login'>login</NavLink>}
      </div>
    </header>
  )
}

export default Header;