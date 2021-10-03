import React from 'react';
import { connect } from 'react-redux';
import {
   follow, setUsers, unFollow,
   setCurrentPage, setTotalUsersCount, toggleIsFetching
} from '../redux/usersReducer';
import * as axios from 'axios';

// import styles from "./Users.module.css";
// import userPhoto from "../Assets/Images/user.png";
import Users from './Users';
import Preloader from '../components/common/Preloader/Preloader';


class UsersContainer extends React.Component {
   constructor(props) {
      super(props);
      // this.getUsers();
   }

   componentDidMount() {
      // debugger;
      this.getUsers();
   }

   getUsers = () => {
      // debugger;
      // if (this.props.users.length === 0) {
      this.props.toggleIsFetching(true);
      axios.get("https://social-network.samuraijs.com/api/1.0/users", {
         withCredentials: true,
      })
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
      // }
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
         withCredentials: true,
      })
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);

         });
   }

   render() {
      // debugger;
      return (
         this.props.isFetching ? <Preloader /> :
            <Users users={this.props.users}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               follow={this.props.follow}
               unFollow={this.props.unFollow}
               getUsers={this.getUsers}
            />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.userPage.users,
      pageSize: state.userPage.pageSize,
      totalUsersCount: state.userPage.totalUsersCount,
      currentPage: state.userPage.currentPage,
      isFetching: state.userPage.isFetching,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(follow(userId))
      },
      unFollow: (userId) => {
         dispatch(unFollow(userId))
      },
      setUsers: (users) => {
         dispatch(setUsers(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPage(pageNumber))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setTotalUsersCount(totalCount))
      },
      toggleIsFetching: (isFetching) => {
         dispatch(toggleIsFetching(isFetching))
      },
   }

}






export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
// export default connect(mapStateToProps, {
//    follow, unFollow, setUsers, setCurrentPage,
//    setUsersTotalCount, toggleIsFetching,
// })(UsersContainer);
