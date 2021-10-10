import { AuthAPI } from "../api/api"
import { getAuthUserData } from "./AuthReducer";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type InitialStateType = {
   initialized: boolean,
};
let initialState: InitialStateType = {
   initialized: false,
};
const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case INITIALIZED_SUCCESS:
         return {
            ...state,
            initialized: true,
         }
      default:
         return state;
   }
};

type InitializedSuccessActionType = {
   type: typeof INITIALIZED_SUCCESS,
}
export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS }) //action creator

export const initializeApp = () => (dispatch: any) => { //thunk container
   let promise = dispatch(getAuthUserData());
   // promise.then(() => {
   //    dispatch(initializedSuccess()); // если много, то все промисы в массив и Promis.all([])
   // });
   Promise.all([promise])
      .then(() => {
         dispatch(initializedSuccess());
      });
}


export default appReducer;