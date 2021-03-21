import React, {useState} from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer'

const RepositoryList = () => {
  const [sort, setSort] = useState('Latest');
  if (sort === "Latest") {
    setSort({
      orderBy: "CREATED_AT",
      orderDirection: "DESC",
    })
  } else if (sort === "Best") {
    setSort({
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'DESC',
    })
  } else if (sort === "Worst") {
    setSort({
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'ASC',
    })
  }
  const [search, setSearch] = useState('');
  const { repositories, fetchMore } = useRepositories(sort, search, 8);

  // Get the nodes from the edges array
  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];

  const onEndReach = () => {
    fetchMore()
  };

  return <RepositoryListContainer 
  repositories={repositoryNodes} 
  sortOption={setSort} 
  setSearch={setSearch} 
  onEndReach={onEndReach}
  />;
};

export default RepositoryList;