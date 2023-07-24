import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';


const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

const Dialogs = (props) => {

  let dialogsPage = props.dialogsPage
  let dialogsElements = dialogsPage.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
  let messagesElements = dialogsPage.messagesData.map(message => <Message id={message.id} message={message.message} messageOwner={message.messageOwner} />)

  let inputRef = React.createRef();

  let sendMessage = () => {
    let text = inputRef.current.value;
    props.dispatch({type: ADD_MESSAGE, message: text})
  }

  let characterToState = () => {
    let text = inputRef.current.value;
    props.dispatch({type: UPDATE_NEW_MESSAGE_TEXT, messageSymbol: text});
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <div className={styles.newMessage}>
          <input onChange={characterToState} ref={inputRef} value={props.newMessageText} />
          <button onClick={sendMessage}>send</button>
        </div>
      </div>
    </div>
  )
}


export default Dialogs;
