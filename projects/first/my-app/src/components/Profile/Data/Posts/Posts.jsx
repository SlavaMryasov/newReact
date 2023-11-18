import { Field, reduxForm } from 'redux-form';
import Post from './Post/Post';
import styles from './Posts.module.css';
import React from 'react';

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
  
  const Posts = React.memo((props) => {
console.log( 'dasd')
    const newPost = (values)=> {
      props.addNewPost({id:4, message:values.textareaForPost, likesCount: 2})
    }

  let postsElement = props.postsData.map(post => <Post message={post.message} key={post.id} />)

  return (
    <div className={styles.posts}>
      <div className={styles.NewPosts}>
        <div>My posts</div>
        <PostFormRedux onSubmit={newPost}/>
      </div>
      <div className={styles.messages}>
        {postsElement}
      </div>
    </div>
  )
})

export default Posts