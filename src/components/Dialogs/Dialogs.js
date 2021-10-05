import React from 'react'
import c from './Dialogs.module.css';
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
// import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redax/dialogReducer';

const Dialogs = (props) => {

   // let state = props.store.getState().dialogsPage;

   let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
   let messageElements = props.dialogsPage.messages.map(m => <Message id={m.id} key={m.id} message={m.message} />);
   let newMessageBody = props.dialogsPage.newMessageBody;

   // let newMessage = React.createRef();
   // let addNewMessage = () => {
   //    let text = newMessage.current.value;
   //    alert(text);
   // }
   let onSendMessageClick = () => {
      props.sendMessage();
      // props.store.dispatch(sendMessageCreator());
   }
   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
      // props.store.dispatch(updateNewMessageBodyCreator(body));
   }

   if (!props.isAuth) return <Redirect to={"/Login"} />;
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