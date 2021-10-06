import React from "react";
import { Form, Field } from 'react-final-form'

const onSubmit = (formData) => {
   window.alert(formData.login);
};

const LoginForm = () => (
   <Form
      // onSubmit={props.onSubmit}
      // onSubmit={onSubmit}
      // validate={validate}

      // onSubmit={(formData) => { window.alert(formData.login) }}>
      onSubmit={onSubmit}>
      {({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>

            <div>
               {/* <input placeholder={'Login'}></input> */}
               <Field name="login" component="input" placeholder={'Login'} />
            </div>
            <div>
               {/* <input placeholder={'Password'}></input> */}
               <Field name="password" component="input" placeholder={'Password'} />
            </div>
            <div>
               {/* <input type={"checkbox"}></input> remember me */}
               <Field component="input" type="checkbox" name="rememberMe" />
            </div>
            <div>
               <button type="submit">Submit</button>
            </div>

         </form>
      )}
   </Form>
)

const Login = () => {
   return <div>
      <h1>LOGIN</h1>

      {/* <LoginForm onSubmit={onSubmit} /> */}
      <LoginForm />


   </div>
}

export default Login;