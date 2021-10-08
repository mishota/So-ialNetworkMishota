import { AuthAPI } from "../api/api"

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
};
const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
            // isAuth: true,
         }
      default:
         return state;
   }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })
// export const getAuthUserData = () => (dispatch) => { //thunk container  promise
//    AuthAPI.me() // вернет промис
//       .then(response => {
//          if (response.data.resultCode === 0) {
//             dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true))
//          }
//       });
// }
export const getAuthUserData = () => async (dispatch) => { //thunk container async
   let response = await AuthAPI.me()

   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true))
   }

}

// export const loginMe = (email, password, rememberMe) => (dispatch) => { //thunk container
//    debugger;
//    AuthAPI.loginMe(email, password, rememberMe) // вернет промис
//       .then(response => {
//          debugger;
//          if (response.data.resultCode === 0) {
//             dispatch(getAuthUserData())
//          }
//       });
// }

export const loginMe = (email, password, rememberMe) => async (dispatch) => { //thunk container
   let response = await AuthAPI.loginMe(email, password, rememberMe) // вернет промис
   if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
   }

}
export const logout = () => (dispatch) => { //thunk container
   AuthAPI.logout() // вернет промис
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
         }
      });
}

export default authReducer;