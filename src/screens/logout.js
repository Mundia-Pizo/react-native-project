import React from 'react';
import {Text,View,
     TouchableOpacity,
     StyleSheet,
    } from 'react-native';

import Logo from '../components/logo';

export default class Logout extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Logo/>
              <Text style={[styles.textstyle,{paddingVertical:20}]}>Peguine Would like to thank you for your time
              </Text>
              <View style={{flexDirection:'row'}}>

                  <Text style={styles.textstyle}>
                    To continue using penguine please </Text>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')}>
                     <Text style={{color:'blue',fontWeight:'500', fontSize: 20, fontStyle:'italic'}}>Login</Text>
                 </TouchableOpacity>

               </View>
            </View>
        )

      
    }

}

const styles=StyleSheet.create({
       container:{
           flex:1,
           alignItems:'center',
           justifyContent:'center',
           backgroundColor:'#494949',
           paddingRight:10,
           paddingLeft:10,
       },
       textstyle:{
           fontWeight:'700',
           fontSize:20,

       }       
      
})
