import React from "react";
import { Form, Field } from 'react-final-form'
import { connect } from "react-redux";
import { required } from "../../utils/validators";
import { Input } from "../common/formControls";
import { loginMe, logout } from "../../redux/AuthReducer.js"
import { Redirect } from "react-router";


// const LoginForm = ({onSubmit, handleSubmit, error(); }) => (
const LoginForm = (props) => (
   <Form
      // onSubmit={props.onSubmit}
      // onSubmit={onSubmit}
      // validate={validate}

      // onSubmit={(formData) => { window.alert(formData.login) }}>
      onSubmit={props.onSubmit}>
      {({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>

            <div>
               {/* <input placeholder={'Login'}></input> */}
               {/* <Field name="login" component="input" placeholder={'Login'} /> */}
               <Field name="email" component={Input} placeholder={'Login'} validate={required} />
            </div>
            <div>
               {/* <input placeholder={'Password'}></input> */}
               <Field name="password" component={Input} placeholder={'Password'} type={"password"} validate={required} />
            </div>
            <div>
               {/* <input type={"checkbox"}></input> remember me */}
               <Field component={Input} type="checkbox" name="rememberMe" validate={required} />
            </div>

            {props.captchaUrl && <img src={props.captchaUrl} />}
            {props.captchaUrl && <Field name="captcha" component={Input} />}
            <div>
               <button type="submit">Submit</button>
            </div>

         </form>
      )}
   </Form>
)

const Login = (props) => {
   const onSubmit = (formData) => {
      // window.alert(formData.login);
      props.loginMe(formData.email, formData.password, formData.rememberMe, formData.captcha)
   };

   if (props.isAuth) {
      return <Redirect to={"/profile"} />
   }
   return <div>
      <h1>LOGIN</h1>

      <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      {/* <LoginForm /> */}


   </div>
}
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl,
})
export default connect(mapStateToProps, { loginMe })(Login);