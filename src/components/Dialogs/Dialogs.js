import React from 'react'
import c from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';

const Dialogs = (props) => {

   let dialodsItems = props.dialogs
      .map((d) => <DialogItem name={d.name} id={d.id} />);


   let messageElements = props.messages.map(m => <Message id={m.id} message={m.message} />);

   let newMessage = React.createRef();
   let addNewMessage = () => {
      let text = newMessage.current.value;
      alert(text);
   }
   return (
      <div className={c.dialogs}>
         <div className={c.dialogsItems}>
            {dialodsItems}
         </div>
         <div className={c.messages}>
            {messageElements}
         </div>
         <div>
            <textarea ref={newMessage}></textarea>
            <button onClick={addNewMessage}>Add message</button>
         </div>
      </div>
   )
}

export default Dialogs;