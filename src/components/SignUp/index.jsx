import React from 'react';
import { useHistory } from "react-router-native";
import useSignIn from '../../hooks/useSignIn'
import useSignUp from '../../hooks/useSignUp'
import SignUpContainer from './SignUpContainer'

const SignUp = () => {
  const history = useHistory();
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      history.push("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} />
  )
};

export default SignUp;