import React from "react";
// import state from "../../../redax/reduxStore";
import Post from "../Post/Post";
import c from './MyPosts.module.css';
// import { addPostActionCreator, updateNewPostActionCreator } from "../../../redax/profileReducer.js";
import { Form, Field } from 'react-final-form'
import { maxValue, required, composeValidators } from "../../../utils/validators";
import { TextArea } from "../../common/formControls";




class MyPosts extends React.PureComponent {

   // shouldComponentUpdate(nextProps, nextState) { //для оптимизации перерисовки
   //    return nextProps !== this.props || nextState !== this.state;
   // }
   render() {
      let postsElement = this.props.posts.map(p => <Post message={p.message} LikeCount={p.LikeCount} />)
      let newPostElement = React.createRef();
      let onAddPost = () => {

         // let text = newPostElement.current.value;
         this.props.addPost();
         // props.dispatch(addPostActionCreator());
      }
      let postOnChange = () => {
         let text = newPostElement.current.value;
         this.props.updateNewPostText(text);
         // let action = updateNewPostActionCreator(text);
         // props.dispatch(action);
      }
      const addNewPost = (values) => {
         this.props.addPost(values.newPostText);
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
}

const maxValue10 = maxValue(10);
const AddPostForm = (props) => (
   <Form
      onSubmit={props.addNewPost}>
      {({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>
            <div>
               {/* <textarea onChange={postOnChange} ref={newPostElement} value={props.newPostText} /> */}
               {/* <Field name="newPostText" component="textarea" placeholder={'Enter your post text'} */}
               <Field name="newPostText" component={TextArea} placeholder={'Enter your post text'}
                  // validate={composeValidators(required, maxValue(10))}>
                  validate={required}>

               </Field>
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