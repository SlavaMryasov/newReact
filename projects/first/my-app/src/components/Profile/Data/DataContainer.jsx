import React from 'react';
import Data from './Data';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser } from './../../../redux/dataReducer'

class DataContainer extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {
      this.props.setUser(response.data);
    })
  }

  render() {
    return (
      <Data aboutMe={this.props.aboutMe} fullName={this.props.fullName} />
    )
  }

}

const mapStateToProps = (state) => {
  return {
    aboutMe: state.profilePage.aboutMe,
    fullName: state.profilePage.aboutMe
  }
}


export default connect(mapStateToProps, { setUser })(DataContainer);