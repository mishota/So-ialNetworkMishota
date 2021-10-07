import { createSelector } from "reselect"

export const getUsersFromState = (state) => {
   return state.userPage.users
}

// export const getFilterUsersFromState = (state) => {
//    return getUsersFromState().filter(u => true)
// }
export const getUsersFromStateSUPER = createSelector((getUsersFromState, users) => {
   return users.filter(u => true)
})


export const getPageSize = (state) => {
   return state.userPage.pageSize
}
export const getTotalUsersCount = (state) => {
   return state.userPage.totalUsersCount
}
export const getCurrentPage = (state) => {
   return state.userPage.currentPage
}
export const getIsFetching = (state) => {
   return state.userPage.isFetching
}
export const getFollowingInProcess = (state) => {
   return state.userPage.followingInProcess
}