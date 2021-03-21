import React from 'react';
import { useHistory } from "react-router-native";
import useCreateReview from '../../hooks/useCreateReview'
import ReviewContainer from './ReviewContainer'

const Review = () => {
  const history = useHistory();
  const [review] = useCreateReview();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const data  = await review({ ownerName, repositoryName, rating, text });
      history.push(`/repository/${data.createReview.repositoryId}`)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReviewContainer onSubmit={onSubmit} />
  )
};

export default Review;