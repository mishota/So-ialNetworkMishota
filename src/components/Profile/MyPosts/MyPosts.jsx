import React from "react";
// import state from "../../../redax/reduxStore";
import Post from "../Post/Post";
import c from './MyPosts.module.css';
// import { addPostActionCreator, updateNewPostActionCreator } from "../../../redax/profileReducer.js";
import { Form, Field } from 'react-final-form'




const MyPosts = (props) => {

   let postsElement = props.posts.map(p => <Post message={p.message} LikeCount={p.LikeCount} />)
   let newPostElement = React.createRef();
   let onAddPost = () => {

      // let text = newPostElement.current.value;
      props.addPost();
      // props.dispatch(addPostActionCreator());
   }
   let postOnChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
      // let action = updateNewPostActionCreator(text);
      // props.dispatch(action);
   }
   const addNewPost = (values) => {
      props.addPost(values.newPostText);
   };

   return (
      <div className={c.postsBlock}>
         <h3>MyPosts</h3>
         <div>
            NewPosts
         </div>
         <div>
            {/* <div>
               <textarea onChange={postOnChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
               <button onClick={onAddPost}>Add post</button>
            </div> */}
            <AddPostForm addNewPost={addNewPost} onSubmit={addNewPost} />
         </div>
         <div className={c.posts}>
            {postsElement}
         </div>

      </div>

   )
}

const AddPostForm = (props) => (
   <Form
      onSubmit={props.addNewPost}>
      {({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>
            <div>
               {/* <textarea onChange={postOnChange} ref={newPostElement} value={props.newPostText} /> */}
               <Field name="newPostText" component="textarea" placeholder={'Enter your post text'} />
            </div>
            <div>
               {/* <button onClick={onAddPost}>Add post</button> */}
               <button type="submit">Add post</button>
            </div>
         </form>
      )}
   </Form>
)

export default MyPosts;