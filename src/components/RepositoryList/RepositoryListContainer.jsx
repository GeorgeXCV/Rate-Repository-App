import React from 'react';
import { FlatList, View, StyleSheet, Platform } from 'react-native';
import ItemSeparator from '../ItemSeparator'
import RepositoryItemContainer from '../RepositoryItem/RepositoryItemContainer';
import Sort from './Sort'
import Search from './Search'

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    // this.props contains the component's props
    const props = this.props;

    return (
      <View>
        <Search setSearch={props.setSearch} />
        <Sort sortOption={props.sortOption}/>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
      <FlatList
        ListHeaderComponent={this.renderHeader}
        ListHeaderComponentStyle={{zIndex: 10}}
        data={this.props.repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItemContainer item={item} />}
        keyExtractor={item => item.id}
      />
      </View>
    );
  }
};

export default RepositoryListContainer;