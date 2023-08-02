import { connect } from 'react-redux';
import { characterToStateActionCreator, sendMessageAcionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessageInContainer: (text) => {
      dispatch(sendMessageAcionCreator(text))
    },
    characterToStateInContainer: (text) => {
      dispatch(characterToStateActionCreator(text))
    }
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;