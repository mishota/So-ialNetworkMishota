import React from "react";
import state from "../../../redax/state";
import Post from "../Post/Post";
import c from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redax/state";
window.state = state;



const MyPosts = (props) => {

   let postsElement = props.posts.map(p => <Post message={p.message} LikeCount={p.LikeCount} />)
   let newPostElement = React.createRef();
   let addPost = () => {
      let text = newPostElement.current.value;
      props.dispatch(addPostActionCreator());
   }
   let postOnChange = () => {
      let text = newPostElement.current.value;
      let action = updateNewPostActionCreator(text);
      props.dispatch(action);
   }
   return (
      <div className={c.postsBlock}>
         <h3>MyPosts</h3>
         <div>
            NewPosts
         </div>
         <div>
            <div>
               <textarea onChange={postOnChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
               <button onClick={addPost}>Add post</button>
            </div>
         </div>
         <div className={c.posts}>
            {postsElement}
         </div>

      </div>

   )
}

export default MyPosts;