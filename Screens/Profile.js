import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Touchable } from 'react-native';
import { Auth } from 'aws-amplify';
import { TouchableOpacity } from 'react-native-gesture-handler';


const  Profile = (props) => {
    const [userName, setuserName] = useState('krishna');
    
    
     useEffect(() =>{
        const getMyId = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setuserName(userInfo.username);
          }
        getMyId();
     },[])
      
   return (
    <View style={styles.container}>
        <Text>Hello, {userName}</Text>  
        <TouchableOpacity onPress={()=>{Auth.signOut()}}><Text>Signout</Text></TouchableOpacity>
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