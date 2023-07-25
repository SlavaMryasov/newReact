import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { characterToStateActionCreator, sendMessageAcionCreator } from '../../redux/state';




const Dialogs = (props) => {
  let dialogsPage = props.dialogsPage
  let dialogsElements = dialogsPage.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
  let messagesElements = dialogsPage.messagesData.map(message => <Message id={message.id} message={message.message} messageOwner={message.messageOwner} />)



  let sendMessage = (event) => {
    let text = event.target.value
    props.dispatch(sendMessageAcionCreator(text))
  }

  let characterToState = (event) => {
    let text = event.target.value
    props.dispatch(characterToStateActionCreator(text));
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <div className={styles.newMessage}>
          <input onChange={characterToState} value={props.newMessageText} />
          <button onClick={sendMessage} value={props.newMessageText} >send</button>
        </div>
      </div>
    </div>
  )

}


export default Dialogs;