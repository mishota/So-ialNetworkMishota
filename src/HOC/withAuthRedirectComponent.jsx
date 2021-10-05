import React from "react";
import { Redirect } from "react-router";
import { connect } from 'react-redux';


let mapStateToPropsForRedirect = (state) => {
   return {
      isAuth: state.auth.isAuth,
   }
}
export const withAuthRedirectComponent = (Component) => {
   class RedirectComponent extends React.Component {
      render() {
         if (!this.props.isAuth) return <Redirect to={"/Login"} />
         return <Component {...this.props} />
      }
   }

   return connect(mapStateToPropsForRedirect)(RedirectComponent);
}