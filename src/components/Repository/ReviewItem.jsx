import React from 'react';
import { StyleSheet, View } from 'react-native';
import { format } from 'date-fns';
import theme from '../../theme'
import Text from '../Text';

const styles = StyleSheet.create({
    item: {
      backgroundColor: theme.colors.itemBackground,
      marginTop: 10,
      flexDirection: "row",
      flexWrap: "wrap",
      padding: 10,
    },
    rating: {
      borderRadius: 40 / 2,
      borderWidth: 2,
      borderColor: theme.colors.rating,
      color: theme.colors.rating,
      height: 40,
      width: 40,
      textAlign: 'center',
      padding: 8.5
    },
    review: {
       paddingLeft: 5,
       width: "85%"
    },
    reviewText: {
      paddingTop: 5
    }
});

const ReviewItem = ({ review }) => {
    return (
      <View style={styles.item}>
        <Text fontWeight='bold' fontSize='subheading' style={styles.rating}>{review.rating}</Text>
      <View style={styles.review}>
        <Text fontWeight='bold' fontSize='subheading'>{review.user.username}</Text>
        <Text color='textSecondary'>{format(new Date(review.createdAt), "dd.MM.yyyy")}</Text>
        <Text style={styles.reviewText}>{review.text}</Text>
      </View>
      </View>
    )
};

export default ReviewItem;