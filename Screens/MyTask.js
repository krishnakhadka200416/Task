import React from 'react';
import { View, ScrollView, StyleSheet,Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Task_list from '../Components/Task_list';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';



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
    id: '58694a0f-3da1-471f-bd96-145571e29722',
    title: 'Fifth Item',
    date:'Monday',
    assignedby: 'krishna',

  },

 
];

const MyTask =(props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
         <ScrollView >
        <Task_list Data = {DATA}/>
            
        </ScrollView>

        <ActionButton  offsetY={30} buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => navigation.navigate('AddTask')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default MyTask;