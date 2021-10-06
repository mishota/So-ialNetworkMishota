import { profileAPI, UserApi } from "../api/api"

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
   posts: [
      { id: 1, message: "How are you", LikeCount: 10 },
      { id: 1, message: "I'm happy", LikeCount: 15 },
   ],
   newPostText: "Mishota",
   profile: null,
   status: "",
};
const profileReducer = (state = initialState, action) => {
   //   debugger;
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            // message: state.newPostText,
            message: action.newPostText,
            LikeCount: 0,
         }
         // let stateCopy = { ...state };
         // stateCopy.posts = [...state.posts]
         // stateCopy.posts.push(newPost);
         // stateCopy.newPostText = '';
         // return stateCopy;
         return {
            ...state,
            // newPostText: '',
            posts: [...state.posts, newPost]
         }

      // case UPDATE_NEW_POST_TEXT:
      //    // let stateCopy = { ...state };
      //    // stateCopy.newPostText = action.newText;
      //    // return stateCopy;
      //    return {
      //       ...state,
      //       newPostText: action.newText,
      //    }

      case SET_USER_PROFILE:
         // debugger;
         return {
            ...state, profile: action.profile
         }
      case SET_STATUS:
         return {
            ...state, status: action.status
         }

      default:
         return state;
   }
}

// export const addPostActionCreator = () => ({ type: ADD_POST, })
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })

// export const updateNewPostActionCreator = (text) => ({
//    type: UPDATE_NEW_POST_TEXT,
//    newText: text,
// })
export const SetUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status: status, })

export const getUserProfile = (userId) => (dispatch) => { //thunk container
   UserApi.getProfile(userId)
      .then(response => {
         dispatch(SetUserProfile(response.data))
      });
}

export const getStatus = (userId) => (dispatch) => { //thunk container
   profileAPI.getStatus(userId)
      .then(response => {
         dispatch(setStatus(response.data))
      });
}

export const updateStatus = (status) => (dispatch) => { //thunk container
   profileAPI.updateStatus(status)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
         }
      });
}

export default profileReducer;