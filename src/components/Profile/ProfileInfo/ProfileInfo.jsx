import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import c from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
   // debugger;
   if (!props.profile) {
      return (<Preloader />);
   }

   return (
      <div>
         {/* <div>
            <img src='https://www.eyestudio.co.zw/wp-content/uploads/2018/12/Eye_Studio_New_Technology.jpg' className={c.profileInfo} />
         </div> */}
         <div className={c.descriptionBlock}>
            <img src={props.profile.photos.large} className={c.profileInfo} />
            <div>{props.profile.fullName}</div>
            <ProfileStatus status="hello my friends" />
         </div>
      </div>
   );
}

export default ProfileInfo;