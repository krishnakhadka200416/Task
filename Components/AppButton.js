import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const AppButton = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginTop:15,
      marginBottom:15,
      backgroundColor: "#FCCF3E",
      height:40,
      padding:10,
      alignItems:"center",
      alignContent:"center",
      alignSelf:"center",
      borderRadius:10,
  }
});

export default AppButton;