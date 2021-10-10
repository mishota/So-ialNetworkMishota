import { type } from "os";
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'dialog_SEND_MESSAGE';

type DialogType = {
   id: number
   name: string
}
type MessageType = {
   id: number
   message: string
}
let initialState = {
   dialogs: [
      { id: 1, name: "Oksi" },
      { id: 2, name: "Anna" }
   ] as Array<DialogType>,
   messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you" }
   ] as Array<MessageType>,
   // newMessageBody: "",
};
export type InitialStateType = typeof initialState;


const dialogReducer = (state = initialState, action: any): InitialStateType => {

   switch (action.type) {
      case SEND_MESSAGE:
         // let body = state.newMessageBody;
         // return {
         //    ...state,
         //    newMessageBody: "",
         //    messages: [...state.messages, { id: 6, message: body }],
         // };
         let body = action.newMessageBody;
         return {
            ...state,
            messages: [...state.messages, { id: 6, message: body }],
         };


      // case UPDATE_NEW_MESSAGE_BODY:
      //    return {
      //       ...state,
      //       newMessageBody: action.body,
      //    };


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

type SendMessageCreatorActionType = {
   type: typeof SEND_MESSAGE
   newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody })
// export const updateNewMessageBodyCreator = (body) => ({
//    type: UPDATE_NEW_MESSAGE_BODY,
//    body: body,
// })

export default dialogReducer;