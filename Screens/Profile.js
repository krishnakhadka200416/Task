import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const  Profile = (props) => {
  return (
    <View style={styles.container}>
      
        <Text>Krishna Khadka</Text>
    
       
   
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    alignContent:"center"
    
  },
  img:{
    width:400,
    height:210,  
    
  },
  profileimg:{
    width:100,
    height:100,
    borderRadius:50,
    marginTop:10
  
    
  }
});

export default Profile;