import { profileAPI, UserApi } from "../api/api"

const ADD_POST = 'profile-ADD-POST';
const DELETE_POST = 'profile-DELETE_POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profile-SET_USER_PROFILE';
const SET_STATUS = 'profile-SET_STATUS';
const SAVE_PHOTO_SUCCESS = "profile-SAVE_PHOTO_SUCCESS";
// const SAVE_PROFILE_SUCCESS = "profile-SAVE_PROFILE_SUCCESS";


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

      case DELETE_POST:
         return {
            ...state,

            posts: state.posts.filter(p => p !== action.postId)
         }

      case SET_USER_PROFILE:
         // debugger;
         return {
            ...state, profile: action.profile
         }
      case SET_STATUS:
         return {
            ...state, status: action.status
         }
      case SAVE_PHOTO_SUCCESS:
         return {
            ...state, profile: { ...state.profile, photos: action.photos }
         }

      // case SAVE_PROFILE_SUCCESS:
      //    return {
      //       ...state, profile: {
      //          ...state.profile,
      //          fullName: action.fullName,
      //          lookingForAJob: action.lookingForAJob,
      //          lookingForAJobDescription: action.lookingForAJobDescription,
      //          aboutMe: action.aboutMe,
      //       }
      //    }

      default:
         return state;
   }
}

// export const addPostActionCreator = () => ({ type: ADD_POST, })
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const deletePost = (postId) => ({ type: SET_STATUS, postId })

// export const updateNewPostActionCreator = (text) => ({
//    type: UPDATE_NEW_POST_TEXT,
//    newText: text,
// })
export const SetUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status: status, })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos, })
// export const saveProfileSuccess = (fullName, lookingForAJob, lookingForAJobDescription, aboutMe) =>
//    ({ type: SAVE_PROFILE_SUCCESS, fullName, lookingForAJob, lookingForAJobDescription, aboutMe })


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
   try {
      profileAPI.updateStatus(status)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setStatus(status))
            }
         });
   }
   catch (error) {
      window.alert(error.message);
   }

}
export const savePhoto = (file) => async (dispatch) => { //thunk container
   const response = await profileAPI.savePhoto(file)

   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos))
   }

}

// export const saveProfile = (fullName, lookingForAJob, lookingForAJobDescription, aboutMe) => async (dispatch) => { //thunk container
//    const response = await profileAPI.saveProfile(fullName, lookingForAJob, lookingForAJobDescription, aboutMe)

//    if (response.data.resultCode === 0) {
//       dispatch(saveProfileSuccess(response.data.data.fullName, response.data.data.lookingForAJob,
//          response.data.data.lookingForAJobDescription, response.data.data.aboutMe))
//    }

// }
export const saveProfile = (profile) => async (dispatch) => { //thunk container
   const response = await profileAPI.saveProfile(profile)
   debugger;
   if (response.data.resultCode === 0) {
      //    dispatch(saveProfileSuccess(response.data.data.fullName, response.data.data.lookingForAJob,
      //       response.data.data.lookingForAJobDescription, response.data.data.aboutMe))
   }
   else {
      // dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }))
      // return Promise.reject(data.messages[0])
   }

}

export default profileReducer;