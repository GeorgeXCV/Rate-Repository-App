import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import { useEffect, useState } from 'react';

const useRepository = (repositoryID, first) => {
  const variables = { id: repositoryID, first: first };
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: variables
  });

  const [repository, setRepository] = useState();
  
  const fetchRepository = () => {
      if (data) {
        setRepository(data.repository)
      }
    };
  
    useEffect(() => {
      fetchRepository()
    }, [data, repositoryID]);

  
    const handleFetchMore = () => {
      const canFetchMore = !loading && data?.repository?.reviews?.pageInfo?.hasNextPage;
  
      if (!canFetchMore) {
        return;
      }
  
      fetchMore({
        variables: {
          after: data.repository.reviews.pageInfo.endCursor,
          ...variables
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const nextResult = {
            repository: {
              ...fetchMoreResult.repository,
              reviews: {
                ...fetchMoreResult.repository.reviews,
                edges: [
                  ...previousResult.repository.reviews.edges,
                  ...fetchMoreResult.repository.reviews.edges,
                ],
            },
          },
        };
        return nextResult;
      },
    });
  };
  
    return { repository, fetchMore: handleFetchMore, loading };
  };
  
export default useRepository;