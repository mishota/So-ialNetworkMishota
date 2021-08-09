import react from "react";
import c from './Profile.module.css';

const Profile = () => {
   return (
      <div className={c.content}>
         <div>
            <img src='https://www.eyestudio.co.zw/wp-content/uploads/2018/12/Eye_Studio_New_Technology.jpg' />
         </div>
         <div>
            <img src='https://i.pinimg.com/736x/a8/98/76/a89876726813dc956ad3edb9faab8a13.jpg' />
            Description
         </div>
         <div>
            MyPosts
            <div>
               NewPosts
            </div>
            <div className={c.posts}>
               <div classname={c.item}>
                  Post 1
               </div>
               <div classname={c.item}>
                  Post 2
               </div>
            </div>
         </div>
      </div>
   )
}

export default Profile;