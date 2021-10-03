import axios from "axios";
import React from "react";
import react from "react";
import { connect } from "react-redux";
import Header from "./Header"
import { setAuthUserData } from "../../redux/AuthReducer.js"

class HeaderContainer extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true
      })
         .then(response => {
            if (response.data.resultCode === 0) {
               this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login)
            }
         });
   }


   render() {
      return (
         <Header {...this.props} />

      )
   }
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);