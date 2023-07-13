import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id
  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}

let dialogsData = [
  { id: 1, name: 'Вася Пупкин' },
  { id: 2, name: 'Петя Кошкин' },
  { id: 3, name: 'Лена Полено' },
  { id: 4, name: 'Оля Икота' },
  { id: 5, name: 'Игорь Иванов' },
  { id: 6, name: 'Жанна Дарк' },
]

let messagesData = [
  { id: 1, message: 'Иван на цыпочках подошел к цыпленку и цыцнул цыц' },
  { id: 2, message: 'Мама мыла раму' },
  { id: 3, message: 'Бык тупогуб тупогубенький бычек' },
  { id: 4, message: 'Картошка дwdwомашняя свежая очень вкусная' },

]

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name={dialogsData[0].name} />
        <DialogItem name={dialogsData[1].name} />
        <DialogItem name={dialogsData[2].name} />
        <DialogItem name={dialogsData[3].name} />
        <DialogItem name={dialogsData[4].name} />
        <DialogItem name={dialogsData[5].name} />

      </div>
      <div className={styles.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  )
}

export default Dialogs;