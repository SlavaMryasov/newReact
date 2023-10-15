import React from 'react';
import Data from './Data';
import { connect } from 'react-redux';
import { profileRequestTC, setUser } from './../../../redux/dataReducer'
import { useLocation, useNavigate, useParams } from 'react-router';
import { getUserStatusTC } from './../../../redux/dataReducer';
import { updateUserStatusTC } from './../../../redux/dataReducer';

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
    this.props.profileRequest(userId ? userId: 29915)
    this.props.getUserStatus(userId ? userId: 29915)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <Data userId={this.props.router.params.userId} aboutMe={this.props.aboutMe} fullName={this.props.fullName} photos={this.props.photos} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    aboutMe: state.profilePage.aboutMe,
    fullName: state.profilePage.fullName,
    photos: state.profilePage.photos,
    status: state.profilePage.status
  }
}


export default connect(mapStateToProps, { setUser, profileRequest: profileRequestTC, getUserStatus: getUserStatusTC, updateUserStatus: updateUserStatusTC })(withRouter(DataContainer));