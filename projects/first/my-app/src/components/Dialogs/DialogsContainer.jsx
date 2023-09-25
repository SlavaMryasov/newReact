import { connect } from 'react-redux';
import { characterToStateActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { authWithRedirect } from '../../hocs/authWithRedirect';


let authWithRedirectComponent = authWithRedirect(Dialogs)

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authWithRedirectComponent)
export default DialogsContainer;