import React from 'react';
import { View, ScrollView, StyleSheet,Text } from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import Task_list from '../Components/Task_list';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { listTasks }  from '../src/graphql/queries';
import { onCreateTask }  from '../src/graphql/subscriptions';
import {useEffect, useState} from "react";


const MyTask =(props) => {
  const {navigation} = props;
  const [tasks, setTasks] = useState([]);
   
  const fetchTasks = async () => {
    try {
      const userid =  await Auth.currentAuthenticatedUser();
      const usersData = await API.graphql(
        graphqlOperation(
          listTasks, {filter: {assigned_to: {eq: userid.attributes.sub}}}
        )
      )
      
      setTasks(usersData.data.listTasks.items);
    
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
     fetchTasks();
  }, [])

  useEffect(() =>{
    const subscription = API.graphql(
      graphqlOperation(onCreateTask)
      ).subscribe({
        next: (data) =>{
          const newTask = data.value.data.onCreateTask;
          console.log("new task created");
          console.log(newTask);
        
        fetchTasks();
      }
      });
    return () => subscription.unsubscribe();
  }, [])
 
  return (
    <View style={styles.container}>
         <ScrollView >
        <Task_list Data = {tasks}/>
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