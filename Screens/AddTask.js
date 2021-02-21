import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';




const AddTask = () => {
  return (
    <View size={styles.container} >
        <Text>Add Task</Text>
       
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