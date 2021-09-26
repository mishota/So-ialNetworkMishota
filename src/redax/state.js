let store = {
   _state: {
      messagesPage: {
         dialogs: [
            { id: 1, name: "Oksi" },
            { id: 2, name: "Anna" }
         ],
         messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you" }
         ]
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
   
   addPost(postMessage) {
      let newPost = {
         id: 5,
         message: postMessage,
         LikeCount: 0,
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
   },
   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
   },
   subscribe(obserever) {
      this._callSubscriber = obserever;
   }
}








export default store;
window.store = store;
