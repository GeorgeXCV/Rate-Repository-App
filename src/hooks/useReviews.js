import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries'

const useReviews = () => {
  const variables = { includeReviews: true };
  const { data, error, loading, refetch } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
    variables: variables
  });

  const [reviews, setReviews] = useState();

  const fetchReviews = async () => {
    if (data) {
        setReviews(data.authorizedUser.reviews)
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [data]);


  return { reviews, loading, refetch};
};

export default useReviews;