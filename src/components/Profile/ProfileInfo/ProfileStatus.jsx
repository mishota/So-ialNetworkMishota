import React from "react";
import ProfileInfo from "./ProfileInfo";
import c from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
   // statusInputRef = React.createRef();
   state = {
      editMode: false,
      status: this.props.status,
   }

   activateEditMode = () => {
      this.setState({
         editMode: true,
      })
   }
   deActivateEditMode = () => {
      this.setState({
         editMode: false,
      })
      // this.props.updateStatus(this.statusInputRef.input.value);
      this.props.updateStatus(this.state.status);
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value,
      })
   }


   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
         this.setState({  //опасно этот метод цикличностью
            status: this.props.status,
         });
      }
      // let a = this.state;
      // let b = this.props;
   }

   render() {
      return (
         <div>
            {!this.state.editMode &&
               <div>
                  <span onDoubleClick={this.activateEditMode}>{this.props.status || "---"}</span >
               </div >
            }
            {
               this.state.editMode &&
               <div>
                  {/* <input ref={this.statusInputRef} autoFocus={true} onBlur={this.deActivateEditMode} */}
                  <input onChange={this.onStatusChange}
                     autoFocus={true}
                     onBlur={this.deActivateEditMode}
                     value={this.state.status} />
               </div>
            }
         </div >
      )
   }
}

export default ProfileStatus;