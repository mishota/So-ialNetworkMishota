import react from "react";
import c from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
   return (
      <div>
         <div>
            <img src='https://www.eyestudio.co.zw/wp-content/uploads/2018/12/Eye_Studio_New_Technology.jpg' />
         </div>
         <div className={c.descriptionBlock}>
            <img src='https://i.pinimg.com/736x/a8/98/76/a89876726813dc956ad3edb9faab8a13.jpg' />
            ava + Description
         </div>
      </div>
   )
}

export default ProfileInfo;