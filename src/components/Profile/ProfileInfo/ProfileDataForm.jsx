import React from "react";
import s from './ProfileInfo.module.css';
import { Form, Field } from 'react-final-form';
import { required } from "../../../utils/validators";
import { Input } from "../../common/formControls";

const ProfileDataForm = (props) => (
   <Form
      // onSubmit={props.onSubmit}
      // onSubmit={onSubmit}
      // validate={validate}
      // onSubmit={(formData) => { window.alert(formData.login) }}>
      // initialValues={props.profile}
      onSubmit={props.onSubmit}>

      {({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>

            <div>
               <b>Full name:</b>
               <Field name="fullName" component={Input} placeholder={'Full name:'} validate={required} />
            </div>
            <div>
               <b>Looking for a job:</b><
                  Field name="lookingForAJob" component={Input} type="checkbox" placeholder={'Looking for a job:'} />
            </div>
            <div>
               <b>My skills:</b>
               <Field name="lookingForAJobDescription" component={Input} placeholder={'My skills:'} validate={required} />
            </div>
            <div>
               <b>About me:</b>
               <Field name="aboutMe" component={Input} placeholder={'About me:'} validate={required} />
            </div>
            <div>
               <button type="submit">Submit</button>
            </div>

            <div>
               <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                  return <div key={key} className={s.contact}>
                     <b>{key}:</b>
                     <Field name={"contacts." + key} component={Input} placeholder={key} />
                  </div>
               })}
            </div>


         </form>
      )}
   </Form>
)



export default ProfileDataForm;