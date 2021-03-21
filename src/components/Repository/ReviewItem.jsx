import React, {useState}  from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Dialog from "react-native-dialog";
import { useHistory } from "react-router-native";
import { format } from 'date-fns';
import useDeleteReview from "../../hooks/useDeleteReview"
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
    },
    buttonView: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "center",
      padding: 10,
    },
    button: {
      padding: 5,
      width: 150,
    },
  buttonText: {
      backgroundColor: theme.colors.primary,
      color: "white",
      height: 40,
      paddingTop: 10
  },
  buttonTextNegative: {
    backgroundColor: theme.colors.error,
    color: "white",
    height: 40,
    paddingTop: 10
  }
});

const ReviewItem = ({ review, myReviews, refetch }) => {

    const history = useHistory();
    const { deleteReview } = useDeleteReview();
    const [visible, setVisible] = useState(false);

    const handleView = () => {
      history.push(`/repository/${review.repository.id}`)
    }

    const showDialog = () => {
      setVisible(true);
    };
  
    const handleCancel = () => {
      setVisible(false);
    };

    const handleDelete = async () => {
      await deleteReview(review.id)
      setVisible(false);
      refetch()
    }

    return (
      <View style={styles.item}>

        <Dialog.Container visible={visible}>
          <Dialog.Title>Delete review</Dialog.Title>
          <Dialog.Description>Are you sure you want to delete this review?</Dialog.Description>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Delete" onPress={handleDelete} />
        </Dialog.Container>

        <Text fontWeight='bold' fontSize='subheading' style={styles.rating}>{review.rating}</Text>
        <View style={styles.review}>
          <Text fontWeight='bold' fontSize='subheading'>{myReviews ? review.repository.fullName : review.user.username}</Text>
          <Text color='textSecondary'>{format(new Date(review.createdAt), "dd.MM.yyyy")}</Text>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>

        {myReviews && 
        <View style={styles.buttonView}>  
          <Pressable style={styles.button} onPress={handleView}>
            <Text style={styles.buttonText} fontWeight="bold" align='center' fontSize="subheading">View repository</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={showDialog}>
            <Text style={styles.buttonTextNegative} fontWeight="bold" align='center' fontSize="subheading">Delete review</Text>
          </Pressable>
        </View>
        }
      </View>
    )
};

export default ReviewItem;