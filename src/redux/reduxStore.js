import { combineReducers, createStore } from "redux"
import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'
import sideBarReducer from './sideBarReducer'
import usersReducer from "./usersReducer";


let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogReducer,
   userPage: usersReducer,
   sideBar: sideBarReducer,
});
let store = createStore(
   reducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;