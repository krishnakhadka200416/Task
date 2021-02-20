import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Task_list from '../Components/Task_list';
import { TouchableOpacity } from 'react-native-gesture-handler';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    date:'Sunday',
    assignedby: 'krishna',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    date:'Monday',
    assignedby: 'krishna',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    date:'Sunday',
    assignedby: 'Sam',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722',
    title: 'Fourth Item',
    date:'Monday',
    assignedby: 'krishna',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    title: 'Fifth Item',
    date:'Monday',
    assignedby: 'Max',
  },
];

const MyTask =(props) => {
  const {navigation} = props;
  return (
    <View >
        <Task_list Data = {DATA}/>
        <TouchableOpacity  onPress={() => navigation.navigate('AddTask')}></TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center"
  }
});

export default MyTask;