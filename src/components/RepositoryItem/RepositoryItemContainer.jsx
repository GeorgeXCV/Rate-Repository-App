import React from 'react';
import { Pressable } from 'react-native';
import { useHistory } from "react-router-native";
import RepositoryItem from './index'

const RepositoryItemContainer = ({item})=> {
    const history = useHistory();
    return (
      <Pressable onPress={() => history.push(`repository/${item.id}`)}>
        <RepositoryItem item={item}/>
      </Pressable>
    )
  }

export default RepositoryItemContainer; 