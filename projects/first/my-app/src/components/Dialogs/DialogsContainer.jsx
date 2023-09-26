import { connect } from 'react-redux';
import { characterToStateActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
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
    sendMessageInContainer: (text) => {
      dispatch(sendMessageActionCreator(text))
    },
    characterToStateInContainer: (text) => {
      dispatch(characterToStateActionCreator(text))
    }
  }
}



export default compose(authWithRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs) 