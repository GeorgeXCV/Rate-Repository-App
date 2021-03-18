import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
    information: {
        margin: 10,
        paddingLeft: 60
    },
    language: {
        backgroundColor: theme.colors.primary,
        color: 'white',
        alignSelf:"flex-start",
        padding: 3
    },
  });

const RepoInformation = ({ item }) => {
    return (
        <View style={styles.information}>
        <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
        <Text color='textSecondary' fontSize="subheading">{item.description}</Text>
        <Text color='textSecondary' fontSize="subheading" style={styles.language}>{item.language}</Text>
        </View>
    )
}

export default RepoInformation;