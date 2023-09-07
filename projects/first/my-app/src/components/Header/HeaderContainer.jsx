<<<<<<< HEAD
import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import axios from "axios";
import { setAuthUserData } from "../../redux/authReducer";

class HeaderContainer extends React.Component {    
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
       withCredentials: true // разрешение делать кроссерверный запрос
  })
  .then(response => {
      if(response.data.resultCode === 0){
        let {id, email, login} = response.data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render(){

    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state)=>({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
=======
import axios from 'axios';
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from './../../redux/authReducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        this.props.setAuthUserData(id, email, login)
      }
    });
  }
  render() {
    return <Header {...this.props} />

  }
}

let mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
>>>>>>> refs/remotes/origin/dev
