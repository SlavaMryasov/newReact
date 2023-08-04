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
    follow: (userId) => {
      dispatch(unFollowAC(userId))
    },
    unfollow: (userId) => {
      dispatch(followAC(userId))
    }
  }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;