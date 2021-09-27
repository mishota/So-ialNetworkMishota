const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   posts: [
      { id: 1, message: "How are you", LikeCount: 10 },
      { id: 1, message: "I'm happy", LikeCount: 15 },
   ],
   newPostText: "Mishota",
};
const profileReducer = (state = initialState, action) => {
   //   debugger;
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText,
            LikeCount: 0,
         }
         state.posts.push(newPost);
         state.newPostText = '';
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;
      default:
         return state;
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST, })
export const updateNewPostActionCreator = (text) => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: text,
})

export default profileReducer;