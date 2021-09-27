const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
      }
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
      if (action.type === ADD_POST) {
         let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            LikeCount: 0,
         }
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);
      }
      else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      }

      else if (action.type === SEND_MESSAGE) {
         let newMessage = {
            id: 3,
            message: this._state.dialogsPage.newMessageBody,
         }
         this._state.dialogsPage.messages.push(newMessage);
         this._state.dialogsPage.newMessageBody = "";
         this._callSubscriber(this._state);
      }
      else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
         this._state.dialogsPage.newMessageBody = action.body;
         this._callSubscriber(this._state);
      }

   }
}

export const addPostActionCreator = () => ({ type: ADD_POST, })
export const updateNewPostActionCreator = (text) => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: text,
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE, })
export const updateNewMessageBodyCreator = (body) => ({
   type: UPDATE_NEW_MESSAGE_BODY,
   body: body,
})








export default store;
window.store = store;
