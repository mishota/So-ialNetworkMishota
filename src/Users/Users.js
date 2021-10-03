// import * as axios from 'axios';
import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../Assets/Images/user.png";
import { NavLink } from 'react-router-dom';


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
                        {u.followed === true
                           ? <button onClick={() => { props.unFollow(u.id) }}  >Unfollow</button>
                           : <button onClick={() => { props.follow(u.id) }}  >Follow</button>}

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