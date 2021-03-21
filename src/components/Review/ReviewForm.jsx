import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from "../FormikTextInput";
import Text from '../Text';
import theme from '../../theme';

const ReviewForm = ({ onSubmit }) => {
  
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
        <FormikTextInput name="ownerName" placeholder="Repository owner name" />
        <FormikTextInput name="repositoryName" placeholder="Repository name"/>
        <FormikTextInput name="rating" placeholder="Rating between 0 and 100"/>
        <FormikTextInput name="text" placeholder="Review" multiline/>
        <Pressable onPress={onSubmit} style={styles.buttonContainer} >
          <Text style={styles.buttonText} fontWeight="bold" align='center' fontSize="subheading">Create Review</Text>
        </Pressable>
      </View>
    );
  };

export default ReviewForm;