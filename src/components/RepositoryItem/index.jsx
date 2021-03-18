import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import AuthorImage from './AuthorImage'
import RepoInformation from './RepoInformation'
import RepoStats from './RepoStats'

const styles = StyleSheet.create({
    item: {
      backgroundColor: theme.colors.itemBackground,
    }
  });

const RepositoryItem = ({ item }) => {
    return (
    <View style={styles.item}>
         <AuthorImage item={item} />
         <RepoInformation item={item} />
         <RepoStats item={item} />
      </View>
    )
  };
  
  export default RepositoryItem;