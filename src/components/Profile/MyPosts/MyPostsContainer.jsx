import React from "react";
// import state from "../../../redax/reduxStore";
// import Post from "../Post/Post";
// import c from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redax/profileReducer.js";
import MyPosts from "./MyPosts";




const MyPostsContainer = (props) => {
   let state = props.store.getState();
   // let postsElement = props.posts.map(p => <Post message={p.message} LikeCount={p.LikeCount} />)
   // let newPostElement = React.createRef();
   let addPost = () => {
      // let text = newPostElement.current.value;
      //props.addPost();
      props.store.dispatch(addPostActionCreator());
   }
   let onPostChange = (text) => {
      // let text = newPostElement.current.value;
      //props.updateNewPostText(text);
      let action = updateNewPostActionCreator(text);
      props.store.dispatch(action);
   }
   return (
      <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
   )
}

export default MyPostsContainer;