import React from 'react';
import ReviewListContainer from './ReviewListContainer'
import useReviews  from '../../hooks/useReviews';

const MyReviews = () => {
    const { reviews, refetch } = useReviews();

    if (!reviews) {
      return null
    } 

    const reviewNodes = reviews.edges
    ? reviews.edges.map(edge => edge.node)
    : [];

    return <ReviewListContainer reviews={reviewNodes} refetch={refetch}/>
      
};

export default MyReviews;