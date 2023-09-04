import logo from "./logo.svg";
import styles from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} />
      <div className={styles.authBlock}>
        <NavLink to='/auth'>login</NavLink>
      </div>
    </header>
  )
}

export default Header;