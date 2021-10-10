import { type } from "os";
import { stringify } from "querystring";
import { profileAPI, UserApi } from "../api/api"
import {PostType, ContactsType, PhotosType, ProfileType } from "../types/types"


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
   ] as Array<PostType>,
   newPostText: "Mishota" as string,
   profile: null as ProfileType | null,
   status: "" as string,
};
export type InitialStateType = typeof initialState;
const profileReducer = (state = initialState, action: any) => {
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
type AddPostActionCreatorActionType = {
   type: typeof ADD_POST
   newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({ type: ADD_POST, newPostText })
type DeletePostActionType = {
   type: typeof SET_STATUS
   postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: SET_STATUS, postId })

// export const updateNewPostActionCreator = (text) => ({
//    type: UPDATE_NEW_POST_TEXT,
//    newText: text,
// })
type SetUserProfileActionType = {
   type: typeof SET_USER_PROFILE
   profile: ProfileType
}
export const SetUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })
type SetStatusActionType = {
   type: typeof SET_STATUS
   status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status: status, })
type SavePhotoSuccessActionType = {
   type: typeof SAVE_PHOTO_SUCCESS
   photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos, })
// export const saveProfileSuccess = (fullName, lookingForAJob, lookingForAJobDescription, aboutMe) =>
//    ({ type: SAVE_PROFILE_SUCCESS, fullName, lookingForAJob, lookingForAJobDescription, aboutMe })


export const getUserProfile = (userId: number) => (dispatch: any) => { //thunk container
   UserApi.getProfile(userId)
      .then(response => {
         dispatch(SetUserProfile(response.data))
      });
}

export const getStatus = (userId: number) => (dispatch: any) => { //thunk container
   profileAPI.getStatus(userId)
      .then(response => {
         dispatch(setStatus(response.data))
      });
}

export const updateStatus = (status: string) => (dispatch: any) => { //thunk container
   try {
      profileAPI.updateStatus(status)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setStatus(status))
            }
         });
   }
   catch (error: any) {
      window.alert(error.message);
   }

}
export const savePhoto = (file: any) => async (dispatch: any) => { //thunk container
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
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => { //thunk container
   const userId = getState().auth.userId;
   const response = await profileAPI.saveProfile(profile)
   if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
      //    dispatch(saveProfileSuccess(response.data.data.fullName, response.data.data.lookingForAJob,
      //       response.data.data.lookingForAJobDescription, response.data.data.aboutMe))
   }
   else {
      // dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }))
      // return Promise.reject(data.messages[0])
   }

}

export default profileReducer;