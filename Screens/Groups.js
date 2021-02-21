import React from 'react';
import { View, ScrollView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

import Group_List from '../Components/Group_List';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listGroups }  from '../src/graphql/queries';
import {useEffect, useState} from "react";



const Groups = (props) => {
  const {navigation} = props;
  const [groups, setGroups] = useState([]);
  const [userId, setUserId] = useState('');
  
  useEffect(() => {
    const fetchUser = async() =>{
    const userid =  await Auth.currentAuthenticatedUser();
    console.log(userid.attributes.sub);
    setUserId(userid.attributes.sub);
    } 
    fetchUser();
  },[])
  
  useEffect(() => {
 
    const fetchGroups = async () => {
      try {
        const usersData = await API.graphql(
          graphqlOperation(
            listGroups, {filter: {created_by: {eq: userId}}}
          )
        )
     
        setGroups(usersData.data.listGroups.items);
      
      } catch (e) {
        console.log(e);
      }
    }
    fetchGroups();
  }, [])
  return (
    <View style={styles.container}>
         <ScrollView >
        <Group_List Data = {groups}/>
            
        </ScrollView>

        <ActionButton  offsetY={30} buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Group" onPress={() => navigation.navigate('CreateGroup')}>
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
export default Groups;