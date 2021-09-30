import React from "react";
import * as axios from 'axios';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { SetUserProfile } from '../../redux/profileReducer'

class ProfileContainer extends React.Component {
   constructor(props) {
      super(props);
      this.getProfile();
   }
   componentDidMount() {
      // debugger;
      // console.warn("in componentDidMount");
      // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1`)
      //    .then(response => {
      //       // debugger;
      //       this.props.SerUserProfile(response.data);
      //    });
   }

   getProfile() {
      debugger;
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
         .then(response => {
            // debugger;
            this.props.SetUserProfile(response.data);
         });
   }



   render() {
      return (
         <div>
            <Profile {...this.props} profile={this.props.profile} />
         </div >
      )
   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile
   }
}
export default connect(mapStateToProps, {
   SetUserProfile,
})(ProfileContainer); 
