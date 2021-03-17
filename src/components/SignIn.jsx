import React from 'react';
import * as yup from 'yup';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from "./FormikTextInput";
import Text from './Text';
import theme from '../theme';

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = yup.object().shape({ 
   username: yup    
   .string()    
   .min(3, 'Username must be at least 3 characters.')    
   .required('Username is required'),  
   password: yup    
   .string()    
   .min(6, 'Password must be at least 6 characters.')    
   .required('Password is required'),
  });

const SignInForm = ({ onSubmit }) => {
  
  const styles = StyleSheet.create({
    buttonContainer: {
      alignSelf:"center",
      padding: 5,
      width: 346,
    },
    buttonText: {
      backgroundColor: theme.colors.primary,
      color: "white",
      height: 40,
      paddingTop: 10
    },
  });

  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
      <Pressable onPress={onSubmit} style={styles.buttonContainer}>
        <Text style={styles.buttonText} fontWeight="bold" align='center' fontSize="subheading">Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}  
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
};

export default SignIn;