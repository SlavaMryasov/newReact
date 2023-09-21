
import { follow, setUsers, unfollow, setUsersTotalCount, changePage, changeStatus, changeStatusRequest } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import React from 'react'
import Users from './Users';
import { usersRequest } from '../../api/api';
import { getUsersThunkCreator } from '../../redux/usersReducer';

class UsersContainer extends React.Component {
    
    componentDidMount() {
        // this.props.changeStatus(true) // toggleIsFetching
        // usersRequest(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items);
        //     this.props.setUsersTotalCount(data.totalCount);
        //     this.props.changeStatus(false)
        // })


        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onChangePage = (page) => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        this.props.changePage(page);
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
            changeStatusRequest={this.props.changeStatusRequest} />
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pending: state.usersPage.pending,
        requestIsActive: state.usersPage.requestIsActive
    }
}

// const mapDispatchToProps = (dispatch) => {//state взяли из store в котором лежит и state и dispatch
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setTotalUsersCount: (usersCount) => {
//             dispatch(setUsersTotalCountAC(usersCount));
//         },
//         changePage: (pageNumber) => {
//             dispatch(changePageAC(pageNumber));
//         },
//         changeStatus: (status) => {
//             dispatch(changeStatusAC(status))
//         }
//     }
// }



export default connect(mapStateToProps,
     { follow, unfollow, setUsers, 
         setUsersTotalCount, changePage,changeStatus, 
         changeStatusRequest,getUsers: getUsersThunkCreator })(UsersContainer);








