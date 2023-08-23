import { follow, setUsers, unfollow, setUsersTotalCount, changePage, changeStatus } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import React from 'react'
import axios from 'axios'
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.changeStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
            this.props.changeStatus(false)
        })

    }
    onChangePage = (page) => {
        this.props.changeStatus(true)
        this.props.changePage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.changeStatus(false)
        })

    }

    render() {
        return <Users onChangePage={this.onChangePage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            pending={this.props.pending} />
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pending: state.usersPage.pending
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



export default connect(mapStateToProps, {follow, unfollow, setUsers, setUsers, setUsersTotalCount, changePage, changeStatus})(UsersContainer);


