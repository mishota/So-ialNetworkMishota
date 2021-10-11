import React from 'react';
import { connect } from 'react-redux';
import {
   follow, unFollow,
   setCurrentPage, toggleFollowingProcess, getUsers
} from '../redux/usersReducer';
import * as axios from 'axios';

// import styles from "./Users.module.css";
// import userPhoto from "../Assets/Images/user.png";
import Users from './Users';
import Preloader from '../components/common/Preloader/Preloader';
import { UserApi } from '../api/api';
import { compose } from 'redux';
import { withAuthRedirectComponent } from '../HOC/withAuthRedirectComponent';
import { getCurrentPage, getFollowingInProcess, getIsFetching, getPageSize, getTotalUsersCount, getUsersFromState } from '../redux/usersSelectors';
import { UsersType } from '../types/types';
import { AppStateType } from '../redux/reduxStore';
type MapStatePropsType = {
   currentPage: number
   pageSize: number
   isFetching: boolean
   users: Array<UsersType>
   totalUsersCount: number
   followingInProcess: Array<number>
}
type MapDispatchPropsType = {
   getUsers: (page: number, pageSize: number) => void
   follow: (userId: number) => void
   unFollow: (userId: number) => void

   toggleFollowingProcess: boolean
}
type OwnPropsType = {
   pageTitle: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {
   // constructor(props) {
   //    super(props);
   //    // this.getUsers();
   // }

   componentDidMount() {
      // this.props.toggleIsFetching(true);
      // UserApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      //    this.props.toggleIsFetching(false);
      //    this.props.setUsers(data.items);
      //    this.props.setTotalUsersCount(data.totalCount);
      // });
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }

   // getUsers = () => {
   //    // debugger;
   //    // if (this.props.users.length === 0) {
   //    this.props.toggleIsFetching(true);
   //    UserApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
   //       this.props.toggleIsFetching(false);
   //       this.props.setUsers(data.items);
   //       this.props.setTotalUsersCount(data.totalCount);
   //    });
   //    // }
   // }

   onPageChanged = (pageNumber: number) => {
      // this.props.setCurrentPage(pageNumber);
      // this.props.toggleIsFetching(true);
      // UserApi.getUsers(pageNumber, this.props.pageSize).then(data => {
      //    this.props.toggleIsFetching(false);
      //    this.props.setUsers(data.items);

      // });
      this.props.getUsers(pageNumber, this.props.pageSize)
   }

   render() {
      // debugger;
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <h2>{this.props.pageTitle}</h2>
         <Users users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            followingInProcess={this.props.followingInProcess}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            getUsers={this.props.getUsers}
            toggleFollowingProcess={this.props.toggleFollowingProcess}
         />
      </>
   }
}

// let mapStateToProps = (state) => {
//    return {
//       users: state.userPage.users,
//       pageSize: state.userPage.pageSize,
//       totalUsersCount: state.userPage.totalUsersCount,
//       currentPage: state.userPage.currentPage,
//       isFetching: state.userPage.isFetching,
//       followingInProcess: state.userPage.followingInProcess,
//    }
// }

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      users: getUsersFromState(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProcess: getFollowingInProcess(state),
   }
}

// let mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userId) => {
//          dispatch(follow(userId))
//       },
//       unFollow: (userId) => {
//          dispatch(unFollow(userId))
//       },
//       setUsers: (users) => {
//          dispatch(setUsers(users))
//       },
//       setCurrentPage: (pageNumber) => {
//          dispatch(setCurrentPage(pageNumber))
//       },
//       setTotalUsersCount: (totalCount) => {
//          dispatch(setTotalUsersCount(totalCount))
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetching(isFetching))
//       },
//    }

// }






// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

// export default connect(mapStateToProps, {
//    follow, unFollow, setUsers, setCurrentPage,
//    setTotalUsersCount, toggleIsFetching, toggleFollowingProcess
// })(UsersContainer);
// export default connect(mapStateToProps, {
//    follow, unFollow, setCurrentPage,
//    toggleFollowingProcess,
//    getUsers,
// })(UsersContainer);

export default compose(

   //TStateProps={}, TDispatchProps={}, TOwnProps={}, State = DefaultRootState
   connect <MapDispatchPropsType, MapDispatchPropsType, OwnPropsType,AppStateType>(mapStateToProps, {
      follow, unFollow, setCurrentPage,
      toggleFollowingProcess,
      getUsers,
   }))(UsersContainer);
   // withAuthRedirectComponent, 
   // connect(mapStateToProps, {
   //    follow, unFollow, setCurrentPage,
   //    toggleFollowingProcess,
   //    getUsers,
   // })
// )
// (UsersContainer);
