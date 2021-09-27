import React from 'react'
import c from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redax/state';

const Dialogs = (props) => {

   let state = props.store.getState().dialogsPage;

   let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messageElements = state.messages.map(m => <Message id={m.id} message={m.message} />);
   let newMessageBody = state.newMessageBody;

   // let newMessage = React.createRef();
   // let addNewMessage = () => {
   //    let text = newMessage.current.value;
   //    alert(text);
   // }
   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());
   }
   let onNewMessageChange = (e) => {
      debugger;
      let body = e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
   }
   return (
      <div className={c.dialogs}>
         <div className={c.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={c.messages}>
            {messageElements}
         </div>
         <div>
            <div><textarea
               value={newMessageBody}
               onChange={onNewMessageChange}
               placeholder="Enter your message">
            </textarea> </div>
            <div><button onClick={onSendMessageClick}>Send</button></div>
         </div>
      </div>
   )
}

export default Dialogs;