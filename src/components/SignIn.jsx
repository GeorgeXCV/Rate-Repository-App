import React from 'react';
import * as yup from 'yup';
import { Pressable, View, StyleSheet } from 'react-native';
import { useHistory } from "react-router-native";
import { Formik } from 'formik';
import FormikTextInput from "./FormikTextInput";
import Text from './Text';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn'

const initialValues = {
  username: '',
  password: '',
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
      <FormikTextInput name="username" placeholder="Username" testID="username"/>
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} testID="password"/>
      <Pressable onPress={onSubmit} style={styles.buttonContainer} testID="submit">
        <Text style={styles.buttonText} fontWeight="bold" align='center' fontSize="subheading">Sign in</Text>
      </Pressable>
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {
  return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
  );
}

const SignIn = () => {
  const history = useHistory();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push("/")
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <SignInContainer onSubmit={onSubmit} />
  )
};

export default SignIn;