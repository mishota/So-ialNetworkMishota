import react from "react";
// import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
   return (
      <div>
         <ProfileInfo profile={props.profile} />
         <MyPostsContainer
         // store={props.store}
         // posts={props.profilePage.posts}
         // newPostText={props.profilePage.newPostText}
         // dispatch={props.dispatch}
         />
      </div>
   )
}

export default Profile;