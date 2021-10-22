// import * as axios from 'axios';
import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../Assets/Images/user.png";
// import { NavLink } from 'react-router-dom';
import Paginator from '../components/common/Paginator/Paginator';
import User from "./User"
import { UsersType } from '../types/types';
// import axios from 'axios';
// import { UserApi } from '../api/api';

type PropsType = {
   totalUsersCount: number
   pageSize: number
   currentPage: number
   onPageChanged: (pageNumber: number) => void
   portionSize?: number
   users: Array<UsersType>
   followingInProcess: Array<number>
   toggleFollowingProcess: (isFetching: boolean, userId: number) => void
   getUsers: (page: number, pageSize: number) => void
   follow: (userId: number) => void
   unFollow: (userId: number) => void
}
let Users: React.FC<PropsType> = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProcess, follow, unFollow }) => {

   // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   // let pages = [];
   // for (let i = 1; i <= pagesCount; i++) {
   //    pages.push(i);
   // }

   return (<div>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
         totalItemsCount={totalUsersCount} pageSize={pageSize} />
      <div>{
         users.map(u => <User user={u}
            key={u.id}
            followingInProcess={followingInProcess}
            follow={follow}
            unFollow={unFollow}
         />)
      }
      </div>
   </div>)
}


export default Users;