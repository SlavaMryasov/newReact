import axios from 'axios';
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from './../../redux/authReducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me').then(responce => {
      console.log(responce, 'ffff')
      this.props.setAuthUserData(responce.data.data)
    }

    )
  }
  render() {
    return (
      <Header />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email
  }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)