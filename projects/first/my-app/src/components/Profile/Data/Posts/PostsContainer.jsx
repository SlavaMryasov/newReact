import { connect } from 'react-redux';
import { setPosts } from '../../../../redux/postsReducer'
import React from 'react';
import Posts from './Posts';



class PostsContainer extends React.Component {

  setPostss(post) {
    console.log(post, 'sdadasdasdas')
setPosts(post)
  }
  componentDidMount() {
    console.log('mount')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.prevProps, 'update')

    if (prevProps.postsData !== this.props.postsData) {
      this.setState({

        postsData: this.props.postsData
      })
    }
  }
  render() {
    console.log(this.props)
    return (
      <Posts postsData={this.props.postsData} setPostss={this.setPostss} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postsData: state.posts.postsData
  }
}



export default connect(mapStateToProps, { setPosts })(PostsContainer);