import logo from "./logo.svg";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} />
    </header>
  )
}

export default Header;