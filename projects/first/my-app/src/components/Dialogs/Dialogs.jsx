import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {
  let dialogsPage = props.dialogsPage
  let dialogsElements = dialogsPage.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
let messagesElements = dialogsPage.messagesData.map(message => <Message id={message.id} message={message.message}/>)
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;






