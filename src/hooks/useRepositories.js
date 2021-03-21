import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (sort, search, first) => {
  const variables = { ...sort, searchKeyword: search, first: first };
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: variables
  });
  const [repositories, setRepositories] = useState();

  const fetchRepositories = async () => {
    if (data) {
        setRepositories(data.repositories)
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, [data]);

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
				const nextResult = {
					repositories: {
						...fetchMoreResult.repositories,
						edges: [
							...previousResult.repositories.edges,
							...fetchMoreResult.repositories.edges,
						],
					},
				};
        return nextResult;
      }
    });
  };

  return { repositories, fetchMore: handleFetchMore, loading };
};

export default useRepositories;