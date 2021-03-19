import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const formatValue = (value) => {
    if (value >= 1000) {
        return Math.abs(value) > 999 ? Math.sign(value)*((Math.abs(value)/1000).toFixed(1)) + 'k' : Math.sign(value)*Math.abs(value)
    } else {
        return value
    }
}

const styles = StyleSheet.create({
    stats: {
        flex: 1,
        flexDirection:'row',
        justifyContent: "space-evenly",
        margin: 10,
    }
  });

const RepoStats = ({ item }) => {
    return (
        <View style={styles.stats}>
        <Text fontWeight="bold" align='center' fontSize="subheading" testID="starCount"> {
            formatValue(item.stargazersCount)} 
            {"\n"}
            <Text color='textSecondary'align='center' fontSize="subheading">Stars</Text>
        </Text>

        <Text fontWeight="bold" align='center' fontSize="subheading" testID="forkCount">
            {formatValue(item.forksCount)}
            {"\n"}
            <Text color='textSecondary' align='center' fontSize="subheading">Forks</Text>
        </Text>
        
        <Text fontWeight="bold" align='center' fontSize="subheading" testID="reviewCount">
            {formatValue(item.reviewCount)}
            {"\n"}
            <Text color='textSecondary' align='center' fontSize="subheading">Reviews</Text>
        </Text>
        <Text fontWeight="bold" align='center' fontSize="subheading" testID="rating">
            {item.ratingAverage}
            {"\n"}
            <Text color='textSecondary' align='center' fontSize="subheading">Rating</Text>
        </Text>
        </View>
    )
}

export default RepoStats;