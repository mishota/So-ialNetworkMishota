import { AuthAPI } from "../api/api"
import { getAuthUserData } from "./AuthReducer";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
   initialized: false,
};
const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZED_SUCCESS:
         return {
            ...state,
            initialized: true,
         }
      default:
         return state;
   }
}
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS }) //action creator

export const initializeApp = () => (dispatch) => { //thunk container
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