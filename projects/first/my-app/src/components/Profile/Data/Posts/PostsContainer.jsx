import { connect } from 'react-redux';
import React from 'react';
import Posts from './Posts';
import { addPost, setPosts, postsData } from '../../../../redux/dataReducer';


class PostsContainer extends React.Component {
componentDidMount(){
  this.props.setPosts(postsData)
}

addNewPost=(newPost)=>{
  this.props.addPost(newPost)
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