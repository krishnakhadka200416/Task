import { API, graphqlOperation } from 'aws-amplify';
import React, { useState } from 'react';
import { View, StyleSheet, Text,TextInput, Button, TouchableOpacity } from 'react-native';
import AppButton from '../Components/AppButton';
import { createGroup }  from '../src/graphql/mutations';


const CreateGroup = (props) => {
  const[groupName, setGroupName] = useState('New Group'); 
  const [userId, setUserId] = useState('');
  const {navigation} = props;

  const createGroupfun = async() =>{
    try{
      const fetchUser = async() =>{
        const userid =  await Auth.currentAuthenticatedUser({ bypassCache: true });
        setUserId(userid.attributes.sub);
    }
    fetchUser();
      const newGroup = await API.graphql(
        graphqlOperation(
          createGroup,{
            input:{
              group_name: groupName,
              created_by: userId
            }
          }
        )
      )
      navigation.navigate('Router');
    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <View size={styles.container} >
        <Text style={styles.text1}>Group Name:</Text>
        <TextInput
         style={styles.text}
         onChangeText={text => setGroupName(text)}
        />
       
      <TouchableOpacity onPress={createGroupfun}>

         <AppButton text ={"Create Group"}/>
        
      </TouchableOpacity> 
          
      

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:"center"
  }, 
  text1:{
    padding:10, 
     marginLeft:15, 
    fontWeight:"bold", 

  },
  text:{
    height: 40, 
    borderColor: 'gray',
     borderBottomWidth:2, 
     borderBottomLeftRadius:15, 
     borderBottomRightRadius:15, 
     margin:20

  }
});

export default CreateGroup;