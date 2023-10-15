import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { reduxForm, Field } from 'redux-form';


const Dialogs = (props) => {
  let dialogsPage = props.dialogsPage
  let dialogsElements = dialogsPage.dialogsData.map(dialog => <DialogItem id={dialog.id} key={dialog.id} name={dialog.name} />)
  let messagesElements = dialogsPage.messagesData.map(message => <Message id={message.id} key={message.id} message={message.message} messageOwner={message.messageOwner} />)



  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody) // смотреть на name
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  )

}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.newMessage}>
        <Field component='input' name='newMessageBody' placeholder='Enter Your message' />
        <button>send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;