import React,{useState, useEffect} from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';

import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createTask }  from '../src/graphql/mutations';
import AppButton from '../Components/AppButton';




const AddTask = (props) => {
  const[taskTitle, setTaskTitle] = useState('New Task');
  const[completeBy, setCompleteBy] = useState('Set Date');
 
  const {navigation} = props;
  
 
  
  const createTaskfun = async() =>{
    try{    
      const userid =  await Auth.currentAuthenticatedUser();
    
      const newTask = await API.graphql(
        graphqlOperation(
          createTask,{
            input:{
              title: taskTitle,
              
              assigned_to: userid.attributes.sub,
              completeBy: completeBy
            }
          }
        )
      )
      navigation.navigate('Task');
    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <View size={styles.container} >
        <Text style={styles.text1}>Task title:</Text>
        <TextInput
         style={styles.text}
         onChangeText={text => setTaskTitle(text)}
        />
         <Text style={styles.text1}>Complete By:</Text>
        <TextInput
         style={styles.text}
         onChangeText={text => setCompleteBy(text)}
        />
       
      <TouchableOpacity onPress={createTaskfun}>

         <AppButton text ={"Create Task"}/>
        
      </TouchableOpacity> 
       
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:"center"
  },
  textinput:{
    borderBottomWidth:1,
    
  }
});

export default AddTask;