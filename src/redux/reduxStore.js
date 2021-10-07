import { applyMiddleware, combineReducers, createStore } from "redux"
import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'
import sideBarReducer from './sideBarReducer'
import usersReducer from "./usersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleWare from "redux-thunk"
import appReducer from "./AppReducer";
// import { reducer as formReducer } from 'react-final-form'


let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogReducer,
   userPage: usersReducer,
   sideBar: sideBarReducer,
   auth: authReducer,
   app: appReducer
   // form: formReducer,
});
let store = createStore(
   reducers, applyMiddleware(thunkMiddleWare)
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;