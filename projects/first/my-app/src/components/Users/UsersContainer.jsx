
import { follow, changePage, changeStatusRequest, unfollowTC, followTC } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import React from 'react'
import Users from './Users';
import { getUsersThunkCreator } from '../../redux/usersReducer';
import { authWithRedirect } from '../../hocs/authWithRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize,getTotalUsersCount, getCurrentPage, getPending,getRequestIsActive, getUsersSuper, getUsersSuperSelector } from '../../redux/usersSelectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onChangePage = (page) => {
        this.props.changePage(page);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    render() {
        return <Users onChangePage={this.onChangePage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            pending={this.props.pending}
            requestIsActive={this.props.requestIsActive}
            isAuth={this.props.isAuth} />
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         pending: state.usersPage.pending,
//         requestIsActive: state.usersPage.requestIsActive,
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        pending: getPending(state),
        requestIsActive: getRequestIsActive(state),
    }
}

export default compose(
    authWithRedirect,
    connect(mapStateToProps, {
        follow, changePage,
        changeStatusRequest, getUsers: getUsersThunkCreator,
        unfollow: unfollowTC, follow: followTC
    })
)(UsersContainer)



