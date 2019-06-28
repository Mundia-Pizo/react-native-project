import React from 'react';
import {View, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
// import {GiftedChat} from 'react-native-gifted-chat';


export default class Message extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior='position' enabled>
 
               <TextInput
               style={styles.textStyle}
               placeholder='type message'
               />
             
            </KeyboardAvoidingView>
        );
    }
}
const styles=StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'#d7ccc8',
       alignItems:'center',
       justifyContent:'flex-end',
       paddingBottom:10,
    },
    viewstyle:{
      justifyContent:'flex-end',
      alignItems:'center',

    },
    textStyle:{
       fontWeight:'normal',
       fontSize:16,
       width:310,
       height:50,
       borderRadius:25,
       backgroundColor:'#fafafa',
       paddingLeft:20,
       alignItems:'stretch',
       paddingRight:20
      


    }
})