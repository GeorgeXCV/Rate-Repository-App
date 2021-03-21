import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import SignUpForm from './SignUpForm'

const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: ''
};
  
const validationSchema = yup.object().shape({ 
    username: yup    
    .string()    
    .min(1, 'Username must be at least 1 character.')
    .max(30, 'Username cannot exceed 30 characters.')    
    .required('Username is required.'),  
    password: yup    
    .string()    
    .min(5, 'Password must be at least 6 characters.')  
    .max(50, 'Password cannot exceed 50 characters.')    
    .required('Password is required'),
    passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match")
    .required('Password confirmation is required'),
});

const SignUpContainer = ({ onSubmit }) => {
    return (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
  }
  
export default SignUpContainer;