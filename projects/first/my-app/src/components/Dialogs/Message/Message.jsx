import styles from './Message.module.css';

const Message = (props) => {
    return (
      <div className={styles.message} >
        <div className={props.messageOwner === 'me' ? styles.messageMe :  styles.companion}>
          <div>{props.message}</div>
          </div>
        </div>
    )
  }

  export default Message;