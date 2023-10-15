import { Field, reduxForm } from 'redux-form';
import Post from './Post/Post';
import styles from './Posts.module.css';


const Posts = (props) => {

  let postsElement = props.postsData.map(post => <Post message={post.message} key={post.id} />)

  const addNewPost = (values) => {
    console.log(props.postsData)
    props.setPostss(({ id: 4,message:values.textareaForPost, likesCount: 5}))
  }

  return (
    <div className={styles.posts}>
      <div className={styles.NewPosts}>
        <div>My posts</div>
        <PostFormRedux onSubmit={addNewPost} />
      </div>
      <div className={styles.messages}>
        {postsElement}
      </div>
    </div>
  )
}

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='textareaForPost' placeholder='enter Your message post' />
        <div>
          <button>Send</button>
        </div>
      </div>
    </form>
  )
}

const PostFormRedux = reduxForm({ form: 'addPostForm' })(PostForm)

export default Posts