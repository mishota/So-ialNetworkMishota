import react from "react";
import c from './Navbar.module.css';

const Navbar = () => {
   return (
      <nav className={c.nav}>
         <div className={c.item}>
            <a >Profile</a>
         </div>
         <div className={c.item}>
            <a>Messeges</a>
         </div>
         <div className={c.item}>
            <a>News</a>
         </div>
         <div className={c.item}>
            <a>Music</a>
         </div>
         <div className={c.item}>
            <a>Settings</a>
         </div>
         <div></div>
      </nav>
   )
}

export default Navbar;