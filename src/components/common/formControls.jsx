import React from 'react';
import styles from "./formControls.module.css"


const MyFormControl = ({ input, meta, child, ...props }) => {
   const hasError = meta.touched && meta.error;
   return (
      <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
         <div>
            {props.children}
         </div>
         <div>
            {hasError && <span>{meta.error}</span>}
         </div>
      </div>
   )
}
export const TextArea = (props) => {
   const { input, meta, child, ...restprops } = props
   return <MyFormControl {...props}> <textarea {...input} {...restprops} /> </MyFormControl>
}

export const Input1 = (props) => {
   const { input, meta, child, ...restprops } = props
   return <MyFormControl {...props}> <Input {...input} {...restprops} /> </MyFormControl>
}
export const TextArea1 = ({ input, meta, ...props }) => {

   const hasError = meta.touched && meta.error;
   return (
      <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
         <div>
            <textarea {...input} {...props} />
         </div>
         <div>
            {hasError && <span>{meta.error}</span>}
         </div>
      </div>
   )
}

export const Input = ({ input, meta, ...props }) => {

   const hasError = meta.touched && meta.error;
   return (
      <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
         <div>
            <input {...input} {...props} />
         </div>
         <div>
            {hasError && <span>{meta.error}</span>}
         </div>
      </div>
   )
}