import React, { useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import c from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

   // let stateWithSetState = useState(false);
   // let editMode = stateWithSetState[0];
   // let setEditMode = stateWithSetState[1];
   let [editMode, setEditMode] = useState(false);

   let [status, setStatus] = useState(props.status);

   useEffect(() => {
      setStatus(props.status);
   }, [props.status]);

   const activateEditMode = () => {
      setEditMode(true);
   }

   const deActivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
   }

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   }
   return (
      <div>
         {!editMode &&
            <div>
               <span onDoubleClick={activateEditMode}>{props.status || "---"}</span >
            </div >
         }
         {editMode &&
            <div>
               {/* <input ref={this.statusInputRef} autoFocus={true} onBlur={this.deActivateEditMode} */}
               <input onChange={onStatusChange}
                  autoFocus={true}
                  onBlur={deActivateEditMode}
                  value={status} />
            </div>
         }
      </div >
   )
}



export default ProfileStatusWithHooks;