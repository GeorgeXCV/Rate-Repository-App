import React from 'react';
import { View, StyleSheet, ScrollView  } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import AppBarTab from './AppBarTab'
import AuthStorageContext from "../contexts/AuthStorageContext";
import { GET_USER } from "../graphql/queries";
import { useContext } from 'react';
import { useQuery, useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    height: '10%',
    display: "flex",
    flexDirection: "row",
  }
});

const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const { data, error, loading }  = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
  });

  let loggedIn = false;

  if (data) {
      if (data.authorizedUser) {
        loggedIn = true
      }
  } 
  
  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
      <Link
        to="/"
        component={AppBarTab}
        text={"Repositories"}
      />
      {loggedIn ? (
        <Link
          to="/"
          component={AppBarTab}
          text={"Sign Out"}
          onPress={signOut}
        />
      ) : (
        <Link
          to="/signin"
          component={AppBarTab}
          text={"Sign in"}
        />
      )}
      </ScrollView>
  </View>
  )
};

export default AppBar;