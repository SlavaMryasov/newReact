import Post from './Post/Post';
import styles from './Posts.module.css';


let postsData = [
  {id:1, message: 'Hi! How are you?', likesCount: 2},
  {id:2, message: 'it is my first post!', likesCount: 3},
  {id:3, message: 'shikaka!', likesCount: 5},
]

let postsElement = postsData.map(post => <Post message={post.message}/>)

const Posts = () => {
  return (
    <div className={styles.posts}>
      <div className={styles.NewPosts}>
        <div>My posts</div>
        <div><textarea></textarea></div>
        <button className={styles.send}>Send</button>
      </div>
      <div className={styles.messages}>
        {postsElement}
      </div>
    </div>
  )
}

export default Posts;