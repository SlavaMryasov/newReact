import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.ownerPost}>
      <div className={styles.am}>
        <img src='https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg' />
        {props.message}
      </div>
      <div>likes {props.likesCount}</div>
    </div>
  )
}

export default Post;