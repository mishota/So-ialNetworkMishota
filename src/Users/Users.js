// import * as axios from 'axios';
import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../Assets/Images/user.png";
import { NavLink } from 'react-router-dom';
import axios from 'axios';


let Users = (props) => {
   // debugger;
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   // debugger;

   return (<div>
      {/* <button onClick={props.getUsers}>Get Users</button> */}
      <div>
         {pages.map(p => {
            return <span className={(props.currentPage === p) && styles.selectedPage}
               onClick={(e) => { props.onPageChanged(p) }}
            >{p}</span>
         })}
      </div>

      {
         props.users.map(u => {
            return (
               <div key={u.id}>
                  <span>
                     <div>
                        <NavLink to={"/profile/" + u.id}>
                           <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>
                     </div>
                     <div>
                        {u.followed
                           ? <button disabled={props.followingInProcess.some(id => id === u.id)} onClick={() => {
                              props.toggleFollowingProcess(true, u.id);
                              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                 withCredentials: true,
                                 headers: {
                                    "API-KEY": "c41f8ab0-ce0f-434c-98ce-6c7922a87f66",
                                 }
                              })
                                 .then(response => {
                                    if (response.data.resultCode == 0) {
                                       props.unFollow(u.id)
                                    }
                                    props.toggleFollowingProcess(false, u.id);
                                 });
                           }}  >Unfollow</button>

                           : <button disabled={props.followingInProcess.some(id => id === u.id)} onClick={() => {
                              props.toggleFollowingProcess(true, u.id);
                              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                 withCredentials: true,
                                 headers: {
                                    "API-KEY": "c41f8ab0-ce0f-434c-98ce-6c7922a87f66",
                                 }
                              })
                                 .then(response => {
                                    if (response.data.resultCode == 0) {
                                       props.follow(u.id)
                                    }
                                    props.toggleFollowingProcess(false, u.id);
                                 });
                           }}  >Follow</button>}

                     </div>
                  </span>
                  <span>
                     <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                     </span>
                     <span>
                        <div>"u.location.city"</div>
                        <div>"u.location.country"</div>
                     </span>
                  </span>


               </div>)
         })
      }
   </div>)
}


export default Users;