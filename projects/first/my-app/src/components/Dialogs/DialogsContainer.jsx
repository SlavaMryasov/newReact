
import React from 'react';
import { characterToStateActionCreator, sendMessageAcionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {

  let sendMessageInContainer = (text) => {
    props.dispatch(sendMessageAcionCreator(text))
  }

  let characterToStateInContainer = (text) => {
    props.dispatch(characterToStateActionCreator(text));
  }

  return (
    <Dialogs sendMessageInContainer={sendMessageInContainer}
      characterToStateInContainer={characterToStateInContainer}
      dialogsPage={props.dialogsPage}
      newMessageText={props.newMessageText} />
  )

}


export default DialogsContainer;