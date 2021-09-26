import react from "react";
import { NavLink } from "react-router-dom";
import c from './Message.module.css'

const Message = (props) => {
   return (
      <div className={c.message}>{props.message}</div>
   )
}

export default Message;


