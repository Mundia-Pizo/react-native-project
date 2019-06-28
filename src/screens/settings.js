import React from 'react';
import {TouchableOpacity, 
    TextInput, 
    View, 
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView, 
    Text} from 'react-native';

export default class Setings extends React.Component{

    render(){
        return(
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
             <KeyboardAvoidingView style={styles.MainContainerStyle} behavior='padding' enabled>
               <View>
                 <Text style={[styles.textStyle,{paddingVertical:30}]}>Settings</Text>
                 <Text style={{paddingVertical:10, fontSize:16}}>Enter new user name</Text>
                 <TextInput
                       placeholder="Chnge profile name"
                           style={styles.inputstyle}/>

                 <Text style={{fontSize:16, fontWeight:'200', paddingVertical:10, justifyContent:'flex-start'}}>Change profile picture </Text>
                 <TextInput
                         placeholder="choose photo"
                              style={styles.inputstyle}/>

                 <Text style={{fontSize:16, fontWeight:'200', paddingVertical:10}}>Change Password</Text>
                 <TextInput
                        placeholder="Change Password"
                             secureTextEntry={true}
                                style={styles.inputstyle}/>

                 <Text style={{fontSize:16, fontWeight:'200', paddingVertical:10}}>Enter the Visa</Text>
                 <TextInput
                     placeholder="Enter the visa card number"
                        keyboardType='number-pad'
                             style={styles.inputstyle}/>



                <Text style={{fontSize:16, fontWeight:'200', paddingVertical:10}}>Enter the Visa</Text>
                 <TextInput
                     placeholder="Enter the visa card number"
                       keyboardType='number-pad'
                        style={styles.inputstyle}/>


                 <Text style={{fontSize:16, fontWeight:'200', paddingVertical:10}}>Enter the Visa</Text>
                 <TextInput
                       placeholder="Enter the visa card number"
                          keyboardType='number-pad'
                             style={styles.inputstyle}/>

                 <TouchableOpacity>
                     <Text style={{color:'red', fontWeight:'500', fontSize:16, paddingVertical:10}}>Delete Account</Text>
                 </TouchableOpacity>
                 </View>  
             </KeyboardAvoidingView>
             </ScrollView>
        );
    }
} 

const styles= StyleSheet.create({
 MainContainerStyle:{
     flex:1,
     backgroundColor:'#d7ccc8',
     paddingLeft:10,
     alignItems:'center',
     justifyContent:'center'

 },
 textStyle:{
     fontSize:25,
     fontWeight:'700',
     color:'brown',
     alignItems:'center',
     justifyContent:'center',


 },
 inputstyle:{
     backgroundColor:"#fafafa",
     width:340,
     paddingLeft:10,
     color:'#000',
     height:35,
     borderRadius:18.5

 }

})
