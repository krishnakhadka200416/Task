import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Amplify, Auth} from 'aws-amplify';
import awsmobile from './aws-exports';
import NavContainer from './Screens/Navigation/NavContainer';
Amplify.configure(awsmobile); 

const  App = () => {
  return (
    <NavContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);
