import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ItemSeparator from '../ItemSeparator'
import ReviewItem from '../Repository/ReviewItem'

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});

const MyReviewListContainer = ({ reviews, refetch }) => {
    return (
      <View style={styles.container}>
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} myReviews={true} refetch={refetch}/>}
        keyExtractor={item => item.id}
      />
      </View>
    );
};

export default MyReviewListContainer;