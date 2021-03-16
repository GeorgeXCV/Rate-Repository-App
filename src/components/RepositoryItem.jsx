import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const formatValue = (value) => {
    if (value >= 1000) {
        return Math.abs(value) > 999 ? Math.sign(value)*((Math.abs(value)/1000).toFixed(1)) + 'k' : Math.sign(value)*Math.abs(value)
    } else {
        return value
    }
}
  
const AuthorImage = ({ item }) => {
    return (
        <Image
           style={styles.image}
            source={{
            uri: item.ownerAvatarUrl,
            }}
        />
    )
}

const RepoInformation = ({ item }) => {
    return (
        <View style={styles.information}>
        <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
        <Text color='textSecondary' fontSize="subheading">{item.description}</Text>
        <Text color='textSecondary' fontSize="subheading" style={styles.language}>{item.language}</Text>
        </View>
    )
}

const RepoStats = ({ item }) => {
    return (
        <View style={styles.stats}>
        <Text fontWeight="bold" align='center' fontSize="subheading"> {
            formatValue(item.stargazersCount)} 
            {"\n"}
            <Text color='textSecondary'align='center' fontSize="subheading">Stars</Text>
        </Text>

        <Text fontWeight="bold" align='center' fontSize="subheading">
            {formatValue(item.forksCount)}
            {"\n"}
            <Text color='textSecondary' align='center' fontSize="subheading">Forks</Text>
        </Text>
        
        <Text fontWeight="bold" align='center' fontSize="subheading">
            {formatValue(item.reviewCount)}
            {"\n"}
            <Text color='textSecondary' align='center' fontSize="subheading">Reviews</Text>
        </Text>
        <Text fontWeight="bold" align='center' fontSize="subheading">
            {item.ratingAverage}
            {"\n"}
            <Text color='textSecondary' align='center' fontSize="subheading">Rating</Text>
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: theme.colors.itemBackground,
    },
    image: {
        height: theme.image.height,
        width: theme.image.width,
        margin: 10,
        position: 'absolute',
    },
    information: {
        margin: 10,
        paddingLeft: 60
    },
    language: {
        backgroundColor: theme.colors.languageBackground,
        color: 'white',
        alignSelf:"flex-start",
        padding: 3
    },
    stats: {
        flex: 1,
        flexDirection:'row',
        justifyContent: "space-evenly",
        margin: 10,
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