import React from 'react';
import Data from './Data';
import { connect } from 'react-redux';
import { profileRequestTC, setUser } from './../../../redux/dataReducer'

import { useLocation, useNavigate, useParams } from 'react-router';


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
    );
  }


  return ComponentWithRouterProp;
}

class DataContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId
    this.props.profileRequest(userId)
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


export default connect(mapStateToProps, { setUser, profileRequest: profileRequestTC })(withRouter(DataContainer));