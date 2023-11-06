import { connect } from 'react-redux';
import React from "react";
import {reduxForm, Field} from 'redux-form'
import { postLoginTC } from "../../redux/authReducer";
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../FormsControls/FormsControls';

const maxLength30 = maxLengthCreator(30)
const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
  return( // field для того, что бы не писать onChange во всех input, это как контейнерная компонента, которая рисует другую компоненту
    // handlSubmit-колбэк придет из редакс форм, доверяем обработку сабмита(не перезагружай формочку)
    // эта функция получит данные формы, если проверка формы прошла успешно
    // в handleSubmit написано e.prevent:default(отмена действия по умолчанию), внутри собираются все значения из формы 
    // и внутри вызывается родительская функция, что бы передать из формы значения во вне
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={Input} validate={[required, maxLength30 ]}/> 
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"}  component={Input} validate={[required, maxLength20 ]} />
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