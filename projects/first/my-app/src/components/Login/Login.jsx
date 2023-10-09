import { connect } from 'react-redux';
import React from "react";
import {reduxForm, Field} from 'redux-form'
import { postLoginTC } from "../../redux/authReducer";


const LoginForm = (props) => {
  console.log(props.handleSubmit)
  return( // field для того, что бы не писать onChange во всех input, это как контейнерная компонента, которая рисует другую компоненту
    // handlSubmit-колбэк придет из редакс форм, доверяем обработку сабмита(не перезагружай формочку)
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={'input'}/> 
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"}  component={'input'}  />
      </div>
      <div>
        <Field  component={'input'} name={"rememberMe"} type={"checkbox"} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm) // login - это уникальное имя, для того что бы redux-form не путалась, какая форма к чему относится

const Login = (props) => {
  const onSubmit = (formData)=> {
    props.postLogin(formData)
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>

}

const mapStateToProps =(state) =>{
  return {
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, {postLogin: postLoginTC})(Login);