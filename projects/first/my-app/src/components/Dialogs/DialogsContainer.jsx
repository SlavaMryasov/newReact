import { connect } from 'react-redux';
import { characterToStateActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessageInContainer: (text) => {
      dispatch(sendMessageActionCreator(text))
    },
    characterToStateInContainer: (text) => {
      dispatch(characterToStateActionCreator(text))
    }
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;