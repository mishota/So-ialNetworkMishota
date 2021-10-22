import { AppStateType } from './reduxStore';
// import { type } from 'os';
// import { Dispatch } from 'react';
// import { act } from "react-dom/test-utils";
import { UserApi } from "../api/api"
import { PhotosType, UsersType } from "../types/types"
import { ThunkAction } from 'redux-thunk';


const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

let initialState = {
   users: [
      // {
      //    id: 1, userPhoto: "https://favim.com/orig/201105/26/anime-boy-cute-kagamine-len-vocaloid-Favim.com-55957.jpg",
      //    followed: true, name: "Oksana", status: "I'm good", location: { city: "Minsk", country: "Belarus" }
      // },
      //    {
      //       id: 2, photoUrl: "https://favim.com/orig/201105/26/anime-boy-cute-kagamine-len-vocaloid-Favim.com-55957.jpg",
      //       followed: false, fullName: "Misha", status: "all the best", location: { city: "Minsk", country: "Belarus" }
      //    },
      //    {
      //       id: 3, photoUrl: "https://favim.com/orig/201105/26/anime-boy-cute-kagamine-len-vocaloid-Favim.com-55957.jpg",
      //       followed: true, fullName: "Uliana", status: "I'm a queen", location: { city: "Minsk", country: "Belarus" }
      //    },
   ] as Array<UsersType>,
   pageSize: 10 as number,
   totalUsersCount: 0 as number,
   currentPage: 1 as number,
   isFetching: false,
   followingInProcess: [2, 3] as Array<number>,//array of userId
};
type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            // users: { ...state.users }//то же
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         };


      case UN_FOLLOW:
         return {
            ...state,
            // users: { ...state.users }//то же
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         };

      case SET_USERS:
         return { ...state, users: action.users };


      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage };

      case SET_TOTAL_USERS_COUNT:
         return { ...state, totalUsersCount: action.count };

      case TOGGLE_IS_FETCHING:
         return { ...state, isFetching: action.isFetching }

      case TOGGLE_IS_FOLLOWING:
         return {
            ...state,
            followingInProcess: action.isFetching
               ? [...state.followingInProcess, action.userId]
               : state.followingInProcess.filter(id => id !== action.userId)
         }


      default:
         return state;
   }
}

type ActionsType= FollowSuccessActionType|UnFollowSuccessActionType|SetUsersActionType| SetCurrentPageActionType|
SetTotalUsersCountActionType|ToggleIsFetchingActionType|ToggleFollowingProcess;

type FollowSuccessActionType = {
   type: typeof FOLLOW
   userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId })
type UnFollowSuccessActionType = {
   type: typeof UN_FOLLOW
   userId: number
}
export const unFollowSuccess = (userId: number): UnFollowSuccessActionType => ({ type: UN_FOLLOW, userId })
type SetUsersActionType = {
   type: typeof SET_USERS
   users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersActionType => {
   return (
      { type: SET_USERS, users }
   )
}
type SetCurrentPageActionType = {
   type: typeof SET_CURRENT_PAGE
   currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })
type SetTotalUsersCountActionType = {
   type: typeof SET_TOTAL_USERS_COUNT
   count: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
type ToggleIsFetchingActionType = {
   type: typeof TOGGLE_IS_FETCHING
   isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })
type ToggleFollowingProcess = {
   type: typeof TOGGLE_IS_FOLLOWING
   isFetching: boolean
   userId: number
}
export const toggleFollowingProcess = (isFetching: boolean, userId: number): ToggleFollowingProcess => 
({ type: TOGGLE_IS_FOLLOWING, isFetching, userId })


// type GetStateType = ()=> AppStateType;
// type DispatchType = Dispatch<ActionsType>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType >;

export const getUsers = (page: number, pageSize: number): ThunkType => {   //thunk creator requestUsers
   // return (dispatch) => {   //thunk
   //    dispatch(toggleIsFetching(true));
   //    dispatch(setCurrentPage(page));
   //    UserApi.getUsers(page, pageSize).then(data => {
   //       dispatch(toggleIsFetching(false));
   //       dispatch(setUsers(data.items));
   //       dispatch(setTotalUsersCount(data.totalCount));
   //    });
   // }
   // return async (dispatch: DispatchType, getState: GetStateType) => {   //thunk
   return async (dispatch, getState) => {   //thunk
      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(page));
      let data = await UserApi.getUsers(page, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
   }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
   dispatch(toggleFollowingProcess(true, userId));
   let response = await apiMethod(userId);
   if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId));
   }
   dispatch(toggleFollowingProcess(false, userId));
}

// export const follow = (userId) => {   //thunk creator
//    return async (dispatch) => {   //thunk
//       dispatch(toggleFollowingProcess(true, userId));
//       let response = await UserApi.follow(userId)
//       if (response.data.resultCode === 0) {
//          dispatch(followSuccess(userId));
//       }
//       dispatch(toggleFollowingProcess(false, userId));
//    }
// }
export const follow = (userId: number): ThunkType => {   //thunk creator
   return async (dispatch) => {   //thunk
      let apiMethod = UserApi.follow.bind(this);
      let actionCreator = followSuccess;
      followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
   }
}


export const unFollow = (userId: number): ThunkType => {   //thunk creator
   return async (dispatch) => {   //thunk
      dispatch(toggleFollowingProcess(true, userId));
      UserApi.unFollow(userId)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(unFollowSuccess(userId));
            }
            dispatch(toggleFollowingProcess(false, userId));
         });
   }
}
export default usersReducer;