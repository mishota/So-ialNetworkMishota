import { combineReducers, createStore } from "redux"
import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'
import sideBarReducer from './sideBarReducer'


let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogReducer,
   sideBar: sideBarReducer,
});
let store = createStore(reducers);

window.store = store;

export default store;