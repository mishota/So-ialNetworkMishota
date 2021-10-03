import React from "react";
import * as axios from 'axios';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { SetUserProfile } from '../../redux/profileReducer'
import Preloader from '../../components/common/Preloader/Preloader.js';
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
   // constructor(props) {
   // debugger;
   // super(props);
   // this.getProfile();
   // }
   componentDidMount() {
      let userId = this.props.match.params.userId;
      debugger;
      if (!userId) {
         userId = 2;
      }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
         .then(response => {
            // debugger;
            this.props.SetUserProfile(response.data);
         });
      // this.getProfile();
   }

   // getProfile = () => {
   //    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
   //       .then(response => {
   //          this.props.SetUserProfile(response.data);
   //       });
   // }



   render() {
      // debugger;
      return (
         this.props.Profile ? <Preloader /> :
            <Profile {...this.props} profile={this.props.profile} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile
   }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
   SetUserProfile,
})(WithUrlDataContainerComponent); 
