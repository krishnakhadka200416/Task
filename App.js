import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Amplify, Auth, API, graphqlOperation,} from 'aws-amplify';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';
import awsmobile from './aws-exports';
import NavContainer from './Screens/Navigation/NavContainer';

Amplify.configure(awsmobile); 

const  App = () => {
  useEffect( () => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(
            getUser,
            { id: userInfo.attributes.sub }
            )
        )

        if (userData.data.getUser) {
          console.log("User is already registered in database");
          return;
        }

        const newUser = {
          id: userInfo.attributes.sub,
          username: userInfo.username,
         
        }

        await API.graphql(
          graphqlOperation(
            createUser,
            { input: newUser }
          )
        )
      }
    }

    fetchUser();
  }, [])
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
