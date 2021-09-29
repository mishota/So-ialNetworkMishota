import * as axios from 'axios';
import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../Assets/Images/user.png";


class Users extends React.Component {
   // constructor(props) {
   //    super(props);
   // }

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
   }

   getUsers = () => {
      if (this.props.users.length === 0) {
         axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
               this.props.setUsers(response.data.items);
            });
      }
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);

         });
   }

   render() {
      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }
      return <div>
         <div>
            {pages.map(p =>
               <span className={(this.props.currentPage === p) && styles.selectedPage}
                  // onClick={() => { this.props.setCurrentPage(p) }}>{p}</span>
                  onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
            )}
         </div>
         {
            this.props.users.map(u => <div key={u.id}>
               <span>
                  <div>
                     <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto} />
                  </div>
                  <div>
                     {u.followed === true
                        ? <button onClick={() => { this.props.unFollow(u.id) }}  >Unfollow</button>
                        : <button onClick={() => { this.props.follow(u.id) }}  >Follow</button>}

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
         }
      </div>
   }
}

export default Users;
