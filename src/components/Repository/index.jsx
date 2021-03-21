import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from "react-router-native";
import useRepository from "../../hooks/useRepository";
import RepositoryItem from '../RepositoryItem/index'
import ReviewItem from './ReviewItem'
import ItemSeparator from '../ItemSeparator'

const Repository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository(id, 5)

  if (!repository) {
    return null
  } 

  const reviewNodes = repository.reviews
  ? repository.reviews.edges.map(edge => edge.node)
  : [];
    
  return (
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} myReviews={false}/>}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <RepositoryItem item={repository} fullView={true} />}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.5}
      />
  );

};


export default Repository;