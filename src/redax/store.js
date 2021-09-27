import profileReducer, { addPostActionCreator, updateNewPostActionCreator } from './profileReducer';
import dialogReducer, { sendMessageCreator, updateNewMessageBodyCreator } from './dialogReducer'
import sideBarReducer from './sideBarReducer'


let store = {
   _state: {
      dialogsPage: {
         dialogs: [
            { id: 1, name: "Oksi" },
            { id: 2, name: "Anna" }
         ],
         messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you" }
         ],
         newMessageBody: "",
      },
      profilePage: {
         posts: [
            { id: 1, message: "How are you", LikeCount: 10 },
            { id: 1, message: "I'm happy", LikeCount: 15 },
         ],
         newPostText: "Mishota",
      },
      sideBar: {}
   },

   _callSubscriber() {
      console.log('state')
   },



   getState() {
      return this._state;
   },
   subscribe(obserever) {
      this._callSubscriber = obserever;
   },



   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
      this._state.sideBar = sideBarReducer(this._state.sideBar, action);

      this._callSubscriber(this._state);
   }


}




export default store;
window.store = store;
