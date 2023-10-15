import { connect } from 'react-redux';
import {sendMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { authWithRedirect } from '../../hocs/authWithRedirect';
import { compose } from 'redux';




const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (text) => {
      dispatch(sendMessageActionCreator(text))
    },
  }
}



export default compose(authWithRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs) 