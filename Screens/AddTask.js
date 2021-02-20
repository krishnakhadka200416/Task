import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';




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
  }
});

export default AddTask;