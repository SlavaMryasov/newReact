import React from 'react';
import Data from './Data';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser } from './../../../redux/dataReducer'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    )
  }
  return ComponentWithRouterProp;
}

class DataContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
      this.props.setUser(response.data);
      console.log(response.data)
    })
  }

  render() {
    return (
      <Data aboutMe={this.props.aboutMe} fullName={this.props.fullName} photos={this.props.photos} />
    )
  }

}

const mapStateToProps = (state) => {
  return {
    aboutMe: state.profilePage.aboutMe,
    fullName: state.profilePage.fullName,
    photos: state.profilePage.photos
  }
}


export default connect(mapStateToProps, { setUser })(withRouter(DataContainer));