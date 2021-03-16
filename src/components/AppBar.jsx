import React from 'react';
import { View, StyleSheet, ScrollView  } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    height: '10%',
    display: "flex",
    flexDirection: "row",
  }
});

const temp = () => {
    return null;
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
      <Link
        to="/"
        component={AppBarTab}
        text={"Repositories"}
        onPress={temp}
      />
      <Link
        to="/signin"
        component={AppBarTab}
        text={"Sign in"}
        onPress={temp}
      />
      </ScrollView>
  </View>
  )
};

export default AppBar;