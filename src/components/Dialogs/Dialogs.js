import React from 'react'
import c from './Dialogs.module.css';
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
// import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redax/dialogReducer';
import { Form, Field } from 'react-final-form'

const Dialogs = (props) => {

   // let state = props.store.getState().dialogsPage;

   let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
   let messageElements = props.dialogsPage.messages.map(m => <Message id={m.id} key={m.id} message={m.message} />);
   // let newMessageBody = props.dialogsPage.newMessageBody;

   // let newMessage = React.createRef();
   // let addNewMessage = () => {
   //    let text = newMessage.current.value;
   //    alert(text);
   // }
   // let onSendMessageClick = () => {
   //    props.sendMessage();
   //    // props.store.dispatch(sendMessageCreator());
   // }
   // let onNewMessageChange = (e) => {
   //    let body = e.target.value;
   //    props.updateNewMessageBody(body);
   //    // props.store.dispatch(updateNewMessageBodyCreator(body));
   // }

   const addNewMessage = (values) => {
      // window.alert(values.newMessageBody);
      props.sendMessage(values.newMessageBody);
   };


   if (!props.isAuth) return <Redirect to={"/Login"} />;
   return (
      <div className={c.dialogs}>
         <div className={c.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={c.messages}>
            {messageElements}
         </div>
         <AddMessageForm addNewMessage={addNewMessage} onSubmit={addNewMessage} />
      </div>
   )
}


const AddMessageForm = (props) => (
   <Form
      onSubmit={props.addNewMessage}>
      {({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>
            <div>
               {/* <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"/> */}
               <Field name="newMessageBody" component="textarea" placeholder={'Enter your message babe'} />
            </div>
            <div>
               {/* <button onClick={onSendMessageClick}>Send</button> */}
               <button type="submit">Send</button>
            </div>
         </form>
      )}
   </Form>
)

export default Dialogs;