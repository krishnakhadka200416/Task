import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';




const AddTask = () => {
  return (
    <View size={styles.container} >
        <Text>Add Task</Text>
        <TextInput value={"Enter Task Title"} > </TextInput>
        <TextInput value={"Enter Task Description"} > </TextInput>
        <TextInput value={"Enter Task Deadline"} > </TextInput>
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