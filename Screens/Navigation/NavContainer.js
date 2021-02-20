import React from 'react';
import { View, StyleSheet } from 'react-native';
import Router from './Router';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddTask from '../AddTask';
import CreateGroup from '../CreateGroup';
const Stack = createStackNavigator();
const NavContainer = (props) => {
  return (
    <NavigationContainer>
         
         <Stack.Navigator>
         <Stack.Screen name="Task" component={Router} />
         <Stack.Screen name="AddTask" component={AddTask} />
         <Stack.Screen name="CreateGroup" component={CreateGroup} />
         </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default NavContainer;