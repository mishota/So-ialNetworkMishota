import { AppStateType } from './reduxStore';
import { createSelector } from "reselect"

export const getUsersFromState = (state: AppStateType) => {
   return state.userPage.users
}

// export const getFilterUsersFromState = (state) => {
//    return getUsersFromState().filter(u => true)
// }
export const getUsers = createSelector(getUsersFromState, (users) => {
   return users.filter(u => true)
})


export const getPageSize = (state: AppStateType) => {
   return state.userPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
   return state.userPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
   return state.userPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
   return state.userPage.isFetching
}
export const getFollowingInProcess = (state: AppStateType) => {
   return state.userPage.followingInProcess
}