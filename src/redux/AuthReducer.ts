import { type } from "os";
import { AuthAPI, securityAPI } from "../api/api"

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "security/GET_CAPTCHA_URL_SUCCESS";

// export type InitialStateType = {
//    userId: number | null
//    email: string | null
//    login: string | null
//    isAuth: boolean
//    captchaUrl: string | null
// }
// let initialState: InitialStateType = {
//    userId: null,
//    email: null,
//    login: null,
//    isAuth: false,
//    captchaUrl: null,
// };

let initialState = {
   userId: null as number | null,
   email: null as string | null,
   login: null as string | null,
   isAuth: false,
   captchaUrl: null as string | null,
};
export type InitialStateType = typeof initialState;

const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.payload,
            // isAuth: true,
         }
      case GET_CAPTCHA_URL_SUCCESS:
         return {
            ...state,
            ...action.payload,
         }

      default:
         return state;
   }
}
type SetAuthUserDataActionPayloadType = {
   userId: number | null
   email: string | null
   login: string | null
   isAuth: boolean | null
}
type SetAuthUserDataActionType = {
   type: typeof SET_USER_DATA
   payload: SetAuthUserDataActionPayloadType
};
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null,
   isAuth: boolean): SetAuthUserDataActionType => ({
      type: SET_USER_DATA, payload: { userId, email, login, isAuth }
   })
// export const getAuthUserData = () => (dispatch) => { //thunk container  promise
//    AuthAPI.me() // вернет промис
//       .then(response => {
//          if (response.data.resultCode === 0) {
//             dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true))
//          }
//       });
// }

type GetCaptchaUrlSuccessActionType = {
   type: typeof GET_CAPTCHA_URL_SUCCESS
   payload: { captchaUrl: string }
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })

export const getAuthUserData = () => async (dispatch: any) => { //thunk container async
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

export const loginMe = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => { //thunk container
   let response = await AuthAPI.loginMe(email, password, rememberMe, captcha) // вернет промис
   if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
   }
   else if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
   }
   // let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
   //      dispatch(stopSubmit("login", {_error: message}));

}
export const getCaptchaUrl = () => async (dispatch: any) => {
   const response = await securityAPI.getCaptchaUrl();
   const captchaUrl = response.data.url;
   dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => (dispatch: any) => { //thunk container
   AuthAPI.logout() // вернет промис
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
         }
      });
}

export default authReducer;