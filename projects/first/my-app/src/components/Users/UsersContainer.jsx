import { connect } from 'react-redux';
import { characterToStateActionCreator, sendMessageAcionCreator } from '../../redux/dialogsReducer';
import { followAC, unFollowAC } from '../../redux/usersReducer';
import Users from './Users';


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (text) => {
      dispatch(followAC(text))
    },
    unfollow: (text) => {
      dispatch(unFollowAC(text))
    }
  }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;