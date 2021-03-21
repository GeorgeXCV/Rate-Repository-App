import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import { useEffect, useState } from 'react';

const useRepository = (repositoryID) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id: repositoryID }
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
  
    return { repository, loading, refetch: fetchRepository };
  };
  
export default useRepository;