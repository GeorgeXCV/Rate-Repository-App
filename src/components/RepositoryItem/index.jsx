import React from 'react';
import { StyleSheet, Pressable, ScrollView } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import AuthorImage from './AuthorImage'
import RepoInformation from './RepoInformation'
import RepoStats from './RepoStats'
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
    item: {
      backgroundColor: theme.colors.itemBackground,
      maxHeight: 210
    },
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

const RepositoryItem = ({ item, fullView }) => {
    return (
    <ScrollView style={styles.item}>
         <AuthorImage item={item} />
         <RepoInformation item={item} />
         <RepoStats item={item} />
      {fullView && 
        <Pressable style={styles.buttonContainer} onPress={() => Linking.openURL(item.url)}>
         <Text style={styles.buttonText} fontWeight="bold" align='center' fontSize="subheading">Open in GitHub</Text>
        </Pressable>
      }
      </ScrollView>
    )
  };
  
  export default RepositoryItem;