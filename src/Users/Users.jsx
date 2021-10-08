// import * as axios from 'axios';
import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../Assets/Images/user.png";
import { NavLink } from 'react-router-dom';
import Paginator from '../components/common/Paginator/Paginator';
import User from "./User"
// import axios from 'axios';
// import { UserApi } from '../api/api';


let Users = (props) => {

   // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   // let pages = [];
   // for (let i = 1; i <= pagesCount; i++) {
   //    pages.push(i);
   // }

   return (<div>
      <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
         totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
      <div>{
         props.users.map(u => <User user={u}
            key={u.id}
            followingInProcess={props.followingInProcess}
            follow={props.follow}
            unFollow={props.unFollow}
         />)
      }
      </div>
   </div>)


   // return (<div>
   //    {/* <button onClick={props.getUsers}>Get Users</button> */}
   //    {/* <div>
   //       {pages.map(p => {
   //          return <span className={(props.currentPage === p) && styles.selectedPage}
   //             onClick={(e) => { props.onPageChanged(p) }}
   //          >{p}</span>
   //       })}
   //    </div> */}
   //    <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
   //       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />

   //    {
   //       props.users.map(u => {
   //          return (
   //             <div key={u.id}>
   //                <span>
   //                   <div>
   //                      <NavLink to={"/profile/" + u.id}>
   //                         <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto} />
   //                      </NavLink>
   //                   </div>
   //                   <div>
   //                      {u.followed
   //                         ? <button disabled={props.followingInProcess.some(id => id === u.id)}
   //                            onClick={() => {
   //                               props.unFollow(u.id);
   //                            }}  >UnFollow</button>

   //                         : <button disabled={props.followingInProcess.some(id => id === u.id)}
   //                            onClick={() => {
   //                               props.unFollow(u.id);
   //                            }}  >Follow</button>}

   //                   </div>
   //                </span>
   //                <span>
   //                   <span>
   //                      <div>{u.name}</div>
   //                      <div>{u.status}</div>
   //                   </span>
   //                   <span>
   //                      <div>"u.location.city"</div>
   //                      <div>"u.location.country"</div>
   //                   </span>
   //                </span>


   //             </div>)
   //       })
   //    }
   // </div>)
}


export default Users;