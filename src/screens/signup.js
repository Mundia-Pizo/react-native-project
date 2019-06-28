import React from 'react';
import { StyleSheet,
     Text,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity, } from 'react-native';
import Logo from '../components/logo';

export default class Signup extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Logo/>
        <TextInput
        style={styles.loginTextStyle}
         placeholder='enter username'/>
        <TextInput
            style={styles.loginTextStyle}
              keyboardType="email-address"
                 placeholder='enter email'/>
        
        <TextInput
             secureTextEntry={true}
                style={styles.loginTextStyle}
                    placeholder='enter password'/> 
         <TouchableOpacity style={styles.textSignup} onPress={()=>this.props.navigation.navigate('dashboard')}>
             <Text style={styles.suggestionText} >Sign up</Text>
         </TouchableOpacity>
          <Text style={styles.textlogin}>Already have an acoout?</Text>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')}>
           <Text style={styles.suggestionTextstyle}>Login</Text>
         </TouchableOpacity>
       
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#757575',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTextStyle:{
      fontSize:20,
      fontWeight:"bold",
      color:'#000',
      backgroundColor:'#fafafa',
      borderRadius:16,
      width:310,
      height:40,
      justifyContent: 'center',
      marginTop:10,
      paddingHorizontal:10,
  },
  textlogin:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:20
 
   },
   suggestionText:{
    flexDirection:'row',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  
  },

  textSignup:{
    fontSize:20,
    fontWeight:"bold",
    color:'#000',
    backgroundColor:'#494949',
    borderRadius:16,
    width:310,
    height:40,
    justifyContent: 'center',
    marginTop:10,
    paddingHorizontal:10,
    textAlign:'center',
},
suggestionTextstyle:{
  fontSize:20,
  fontWeight:'bold',
  textAlign:'center',
  marginVertical:20,
  color:'blue',

}
});
  
