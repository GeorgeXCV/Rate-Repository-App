import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (sort, search) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { ...sort, searchKeyword: search }
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

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;