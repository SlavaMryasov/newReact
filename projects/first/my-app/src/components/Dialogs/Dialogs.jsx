import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Navigate} from 'react-router-dom';





const Dialogs = (props) => {
  let dialogsPage = props.dialogsPage
  let newMessageText = dialogsPage.newMessageText
  let dialogsElements = dialogsPage.dialogsData.map(dialog => <DialogItem id={dialog.id} key={dialog.id} name={dialog.name} />)
  let messagesElements = dialogsPage.messagesData.map(message => <Message id={message.id} key={message.id} message={message.message} messageOwner={message.messageOwner} />)



  let sendMessage = (event) => {
    let text = event.target.value
    props.sendMessageInContainer(text)
  }

  let characterToState = (event) => {
    let text = event.target.value
    props.characterToStateInContainer(text)
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <div className={styles.newMessage}>
          <input onChange={characterToState} value={newMessageText} />
          <button onClick={sendMessage} value={newMessageText} >send</button>
        </div>
      </div>
    </div>
  )

}


export default Dialogs;