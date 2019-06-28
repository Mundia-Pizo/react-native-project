import React from 'react';
import { StyleSheet,
     Text,
      View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView } from 'react-native';
import Logo from '../components/logo';

export default class Login extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
     
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Logo/>
        <TextInput
              style={styles.loginTextStyle}
                keyboardType="email-address"
                  placeholder='enter email/username'/>
        <TextInput
               secureTextEntry={true}
                  style={styles.loginTextStyle}
                     placeholder='enter password'/> 

         <TouchableOpacity style={styles.buttonlogin} onPress={() => this.props.navigation.navigate('dashboard')}>
                   <Text style={styles.textlogin}>Login</Text>
         </TouchableOpacity>

        <Text style={styles.textlogin}>Dont have an account yet?</Text>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate('signup')}>
                   <Text style={styles.suggestionText}>Sign up</Text>
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
      paddingHorizontal:10,
      paddingVertical:5,
      marginTop:15
  },
  textlogin:{
   fontSize:20,
   fontWeight:'bold',
   textAlign:'center',
   marginVertical:20

  },
  buttonlogin:{
    fontSize:20,
    fontWeight:"bold",
    color:'#000',
    backgroundColor:'#494949',
    borderRadius:16,
    width:310,
    height:40,
    justifyContent: 'center',
    paddingHorizontal:10,
    paddingVertical:5,
    marginTop:15 

  },
  suggestionText:{
    flexDirection:'row',
    fontSize:20,
    fontWeight:'bold',
    color:'blue',
  
  }
});
  
