import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dropdown: {
      backgroundColor: 'transparent',
    },
    dropdownLabel: {
      fontSize: 18,
      textAlign: 'left',
      color: '#000'
    },
    item: {
      justifyContent: 'flex-start',
    },
  });

const Sort = ({ sortOption }) => {
    return (
      <DropDownPicker
        defaultValue={'Latest'}
        dropDownStyle={{backgroundColor: '#fafafa', width:"100%"}}
        placeholder="Latest repositories"
        onChangeItem={item => sortOption(item.value) }
        itemStyle={styles.item}
        labelStyle={styles.dropdownLabel}
        style={styles.dropdown}
        items={[
          {label: 'Latest repositories', value: 'Latest'},
          {label: 'Highest rated repositories', value: 'Best'},
          {label: 'Lowest rated repositories', value: 'Worst'},
        ]}
        itemStyle={styles.item}
      />
    )
  };

export default Sort;