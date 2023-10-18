import { connect } from 'react-redux';
import React from 'react';
import Posts from './Posts';
import { addPost, setPosts, postsData } from '../../../../redux/dataReducer';


class PostsContainer extends React.Component {
componentDidMount(){
 console.log(this.props, 'componentDidMountProps')
  this.props.setPosts(postsData)
}

addNewPost(postText){
  console.log(postText, 'postText', this)
  //this.props.addPost(postText)
}

componentDidUpdate(prevProps, prevState){
  //console.log('componentDidUpdate')
  if(prevProps.postsData !== this.props.postsData){
    this.setState({
      postsData: this.props.postsData
    })
  }
}

  render() {
    return (
      <Posts postsData={this.props.postsData} addNewPost={this.addNewPost}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  }
}



export default connect(mapStateToProps, {addPost,setPosts})(PostsContainer);