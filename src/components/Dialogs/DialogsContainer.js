import React from 'react'
// import c from './Dialogs.module.css';
// import { NavLink } from 'react-router-dom';
// import DialogItem from './DialogItem/DialogItem'
// import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redax/dialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {

//    let state = props.store.getState().dialogsPage;

//    // let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
//    // let messageElements = state.messages.map(m => <Message id={m.id} message={m.message} />);
//    // let newMessageBody = state.newMessageBody;

//    // let newMessage = React.createRef();
//    // let addNewMessage = () => {
//    //    let text = newMessage.current.value;
//    //    alert(text);
//    // }
//    let onSendMessageClick = () => {
//       props.store.dispatch(sendMessageCreator());
//    }
//    let onNewMessageChange = (body) => {
//       // let body = e.target.value;
//       props.store.dispatch(updateNewMessageBodyCreator(body));
//    }
//    return (
//       <Dialogs
//          sendMessage={onSendMessageClick}
//          updateNewMessageBody={onNewMessageChange}
//          dialogs={state.dialogs}
//          messages={state.messages}
//          newMessageBody={state.newMessageBody}
//       />
//    )
// }



let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: () => {
         dispatch(sendMessageCreator());
      },
      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageBodyCreator(body));
      },
   }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;