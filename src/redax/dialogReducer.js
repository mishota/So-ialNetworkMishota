const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
   dialogs: [
      { id: 1, name: "Oksi" },
      { id: 2, name: "Anna" }
   ],
   messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you" }
   ],
   newMessageBody: "",
};

const dialogReducer = (state = initialState, action) => {

   switch (action.type) {
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         return {
            ...state,
            newMessageBody: "",
            messages: [...state.messages, { id: 6, message: body }],
         };


      case UPDATE_NEW_MESSAGE_BODY:
         return {
            ...state,
            newMessageBody: action.body,
         };


      default:
         return state;
   }
}
// if (action.type === SEND_MESSAGE) {
//    let newMessage = {
//       id: 3,
//       message: state.newMessageBody,
//    }
//    state.messages.push(newMessage);
//    state.newMessageBody = "";

// }
// else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//    state.newMessageBody = action.body;

// }

// return state;
// }

export const sendMessageCreator = () => ({ type: SEND_MESSAGE, })
export const updateNewMessageBodyCreator = (body) => ({
   type: UPDATE_NEW_MESSAGE_BODY,
   body: body,
})

export default dialogReducer;