// import * as axios from 'axios';
import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../Assets/Images/user.png";
import { NavLink } from 'react-router-dom';
import Paginator from '../components/common/Paginator/Paginator';
// import axios from 'axios';
// import { UserApi } from '../api/api';


let User = ({ user, followingInProcess, follow, unFollow, }) => {
   return <div>
      {
         <div>
            <span>
               <div>
                  <NavLink to={"/profile/" + user.id}>
                     <img src={user.photos.small ? user.photos.small : userPhoto} className={styles.userPhoto} />
                  </NavLink>
               </div>
               <div>
                  {user.followed
                     ? <button disabled={followingInProcess.some(id => id === user.id)}
                        onClick={() => {
                           unFollow(user.id);
                        }}  >UnFollow</button>

                     : <button disabled={followingInProcess.some(id => id === user.id)}
                        onClick={() => {
                           follow(user.id);
                        }}  >Follow</button>}

               </div>
            </span>
            <span>
               <span>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
               </span>
               <span>
                  <div>"user.location.city"</div>
                  <div>"user.location.country"</div>
               </span>
            </span>


         </div>
      }
   </div>
}

export default User;