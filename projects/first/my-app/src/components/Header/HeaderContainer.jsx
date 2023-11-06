import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import { authRequest, logoutRequest } from "../../api/api";

class HeaderContainer extends React.Component {
  setLoginData() {
    authRequest().then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login, true);
      }
    });
  }

  logoutInContainer(){
    logoutRequest().then(data => {
      if (data.resultCode === 0) {
        //let { id, email, login } = data.data;
        this.setAuthUserData(null, null, null, false); 
      }
    });
  }

  componentDidMount() {
    this.setLoginData()
  }

  
  componentDidUpdate() {
    this.setLoginData()
  }


  render() {
    return <Header {...this.props} logoutInContainer={this.logoutInContainer}/>
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  openSettings: state.auth.openSettings
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)

