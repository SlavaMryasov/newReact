import { connect } from 'react-redux';
import React from 'react';
import Posts from './Posts';
import { setPosts } from '../../../../redux/dataReducer';


class PostsContainer extends React.Component {
// componentDidMount(){
//   console.log(this.props, 'componentDidMountProps')
//   this.props.setPosts(this.props.postsData)
// }

addNewPost(post){
  this.postsData.push(post)
}

// componentDidUpdate(prevProps, prevState){
//   console.log('componentDidUpdate')
//   if(prevProps.postsData !== this.props.postsData){
//     this.props.setState({
//       postsData: this.props.postsData
//     })
//   }
// }

  render() {
    return (
      <Posts postsData={this.props.postsData} addNewPost={this.addNewPost}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    setPosts: setPosts()
  }
}



export default connect(mapStateToProps, { setPosts})(PostsContainer);