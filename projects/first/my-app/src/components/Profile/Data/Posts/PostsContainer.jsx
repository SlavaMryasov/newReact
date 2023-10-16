import { connect } from 'react-redux';
import { setPosts } from '../../../../redux/postsReducer'
import React from 'react';
import Posts from './Posts';



class PostsContainer extends React.Component {
componentDidMount(){
  console.log( this.props.postsData,'mount')
  setPosts(this.props.postsData)
  console.log(setPosts(this.props.postsData),'dw')
}

componentDidUpdate(prevProps, prevState){
  if(prevProps.postsData !== this.props.postsData){
    this.setState({
      postsData: this.props.postsData
    })
  }
}
  addNewPost(post){
    console.log(this.postsData, 'asdf')
    this.postsData.push(post)
    setPosts(this.postsData)
  }
  
  render() {
    return (
      <Posts postsData={this.props.postsData} addNewPost={this.addNewPost}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postsData: state.posts.postsData
  }
}



export default connect(mapStateToProps, { setPosts })(PostsContainer);