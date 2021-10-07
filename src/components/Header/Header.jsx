import react from "react";
import { NavLink } from "react-router-dom";
import c from './Header.module.css';

const Header = (props) => {
   return (
      <header className={c.header}>
         <img src='https://i.pinimg.com/736x/7f/a9/36/7fa9368444fec306b9fa2d61e4f4f3c2.jpg' />
         <div className={c.loginBlock}>
            {props.isAuth
               ? <div> {props.login}  - <button onClick={props.logout}>Logout</button></div>
               : <NavLink to={'/login'}>Login</NavLink>}

         </div>
      </header >
   )
}

export default Header;