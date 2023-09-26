import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux'

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const authWithRedirect = (Component) => { // функция- процессор
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to='../login' replace={true} />
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthWithRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthWithRedirectComponent;
}