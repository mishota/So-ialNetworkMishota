import react from "react";
import c from './Post.module.css'

const Post = (props) => {
   return (

      <div className={c.item}>
         <img src='https://wallup.net/wp-content/uploads/2018/10/05/923123-avatar-fantasy-action-adventure-sci-fi-futuristic-alien-aliens-warrior-fighting-disney.jpg' />
         {props.message}
         <div>
            <span>Like</span>
            <span>LikeCount = {props.LikeCount}</span>
         </div>
      </div>

   )
}

export default Post;