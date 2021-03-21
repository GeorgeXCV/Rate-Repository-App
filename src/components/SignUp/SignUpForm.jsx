import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from "../FormikTextInput";
import Text from '../Text';
import theme from '../../theme';

const SignUpForm = ({ onSubmit }) => {
  
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
        <FormikTextInput name="username" placeholder="Username"/>
        <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
        <FormikTextInput name="passwordConfirmation" placeholder="Confirm Password" secureTextEntry={true}/>
        <Pressable onPress={onSubmit} style={styles.buttonContainer} testID="submit">
          <Text style={styles.buttonText} fontWeight="bold" align='center' fontSize="subheading">Sign up</Text>
        </Pressable>
      </View>
    );
  };

export default SignUpForm;