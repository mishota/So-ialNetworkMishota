import React, { useState, useEffect, setStatus } from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../Assets/Images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, isOwner, status, updateStatus, savePhoto, saveProfile }) => {
   let [editMode, setEditMode] = useState(false);


   const activateEditMode = () => {
      setEditMode(true);
   }

   const deActivateEditMode = () => {
      setEditMode(false);
      // props.updateStatus(status);
   }

   if (!profile) {
      return (<Preloader />);
   }

   const onMainPhotoSeleted = (e) => {
      debugger;
      if (e.target.files.length) {
         savePhoto(e.target.files[0]);
      }
   }

   const onSubmit = (formData) => {
      // window.alert(formData.fullName + formData.lookingForAJob + formData.lookingForAJobDescription + formData.aboutMe);
      debugger;
      saveProfile(formData);
   };

   return (
      <div>
         {/* <div>
            <img src='https://www.eyestudio.co.zw/wp-content/uploads/2018/12/Eye_Studio_New_Technology.jpg' className={c.profileInfo} />
         </div> */}
         <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={s.profileInfo} />
            <div>{profile.fullName}</div>
            {isOwner && <input type={"file"} onChange={onMainPhotoSeleted} />}
            {editMode
               ? <ProfileDataForm profile={profile} onSubmit={onSubmit} />
               : <ProfileData
                  profile={profile}
                  isOwner={isOwner}
                  goToEditMode={() => { setEditMode(true) }}
               />}
            <b>Status:</b><ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
         </div>
      </div>
   );
}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
   return (
      <div>
         <div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
         </div>
         <div>
            <b>Full name:</b> {profile.fullName}
         </div>
         <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
         </div>
         {profile.lookingForAJob &&
            <div>
               <b>My skills:</b> {profile.lookingForAJobDescription}
            </div>
         }
         <div>
            <b>About me:</b> {profile.aboutMe}
         </div>
         <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
               return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
         </div>
      </div>
   )
}
const Contact = ({ contactTitle, contactValue }) => {
   return (
      <div className={s.contact}><b>{contactTitle}:</b> {contactValue} </div>
   )
}


export default ProfileInfo;