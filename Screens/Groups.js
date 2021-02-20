import React from 'react';
import { View, ScrollView, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Group_List from '../Components/Group_List';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: 'Group 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f631',
    title: 'Group 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d721',
    title: 'Group 3',
  },
 

]; 

const Groups = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
         <ScrollView >
        <Group_List Data = {DATA}/>
            
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