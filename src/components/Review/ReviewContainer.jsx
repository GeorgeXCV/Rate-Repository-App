import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import ReviewForm from './ReviewForm'

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({ 
   ownerName: yup    
   .string()    
   .required('Repository owner name is required.'),  
   repositoryName: yup    
   .string()    
   .required('Repository name is required.'),
   rating: yup
   .number()
   .min(0)
   .max(100)
   .required('Rating is required.')
});

const ReviewContainer = ({ onSubmit }) => {
    return (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
        </Formik>
    );
  }
export default ReviewContainer;