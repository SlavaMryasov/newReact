import { connect } from 'react-redux';
import { characterToStateActionCreator, sendMessageAcionCreator } from '../../redux/dialogsReducer';
import { followAC, unFollowAC } from '../../redux/usersReducer';
import Users from './Users';


const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (text) => {
      console.log(text)
      dispatch(unFollowAC(text))
    },
    unfollow: (text) => {
      console.log(text)
      dispatch(followAC(text))
    }
  }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;