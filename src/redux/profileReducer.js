const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
   posts: [
      { id: 1, message: "How are you", LikeCount: 10 },
      { id: 1, message: "I'm happy", LikeCount: 15 },
   ],
   newPostText: "Mishota",
   profile: null,
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
         // let stateCopy = { ...state };
         // stateCopy.posts = [...state.posts]
         // stateCopy.posts.push(newPost);
         // stateCopy.newPostText = '';
         // return stateCopy;
         return {
            ...state,
            newPostText: '',
            posts: [...state.posts, newPost]
         }

      case UPDATE_NEW_POST_TEXT:
         // let stateCopy = { ...state };
         // stateCopy.newPostText = action.newText;
         // return stateCopy;
         return {
            ...state,
            newPostText: action.newText,
         }

      case SET_USER_PROFILE:
         return {
            ...state, profile: action.profile
         }

      default:
         return state;
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST, })
export const updateNewPostActionCreator = (text) => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: text,
})
export const SetUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;