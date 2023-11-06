import logo from "./logo.svg";
import styles from './Header.module.css'
import React from "react";
import { NavLink } from 'react-router-dom';


class Header extends React.Component {
  state = {
    statusLogin: true,
    statusSettings: false
  }

  openSettings = (statusLogin, statusSettings) => {
    this.setState({
      statusLogin: statusLogin,
      statusSettings: statusSettings
    })
  }

  logout = (statusLogin, statusSettings) => {
    this.openSettings(statusLogin, statusSettings)
    this.props.logoutInContainer()
  }

  render() {
    return (
      <header className={styles.header}>
        <img className={styles.logo} src={logo} />
        <div className={styles.loginBlock} >
          <div className={this.state.statusSettings ? styles.settings : styles.settingsHidden}>
            <div >
              {this.props.login}
            </div>
            <div><button onClick={() => this.logout(true, false)}>Logout</button></div>
          </div>
          {this.props.isAuth && this.props.login !== null
            ? <span onClick={() => this.openSettings(false, true)} className={this.state.statusLogin ? '' : styles.loginHidden}>{this.props.login}</span>
            : <NavLink to={'/login'}>Login</NavLink>}

        </div>

      </header>
    )
  }
}

export default Header;