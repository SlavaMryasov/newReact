import { followAC, setUsersAC, unfollowAC, setUsersTotalCountAC, changePageAC } from '../../redux/usersReducer';
import Users from './Users'
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {//state взяли из store в котором лежит и state и dispatch
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setUsersTotalCountAC(usersCount));
        },
        changePage: (pageNumber) => {
            dispatch(changePageAC(pageNumber));
        }
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;