import Post from './Post/Post';
import styles from './Posts.module.css';

const Posts = () => {
  return (
    <div className={styles.posts}>
      <div className={styles.NewPosts}>
        <div>My posts</div>
        <div><textarea></textarea></div>
        <button className={styles.send}>Send</button>
      </div>
      <div className={styles.messages}>
        <Post message='Hi, how are you?' likesCount='2' />
        <Post message='It is my first post!' likesCount='4' />
      </div>
    </div>
  )
}

export default Posts;