import React from 'react';
import {Text,View, TextInput,
     StyleSheet, Image, 
     KeyboardAvoidingView
    } from 'react-native';

export default class Payment extends React.Component{
    render(){
        return(
        <View>
           <KeyboardAvoidingView style={{justifyContent:'flex-start',paddingLeft:20, paddingVertical:20}} bahavior='padding' enabled>
            

           <Text style={{fontSize:20, fontWeight:'700'}}>Payment by VISA</Text>
           <Text style={{fontSize:20, fontWeight:'700'}}>Visa Card Number</Text>
            <TextInput
                   style={styles.textInputStyle}
                      keyboardType="number-pad"
                         placeholder='4262774883663838'/>
            
            <Text style={{fontSize:20, fontWeight:'700'}}>CVS number</Text>
            <TextInput
                  style={styles.textInputStyle}
                     keyboardType="number-pad"
                           placeholder='567'/>
            </KeyboardAvoidingView>
        </View>  
        )
    }
}
const styles=StyleSheet.create({
    MainContainer:{
        flex:1,
        justifyContent:'center',
        paddingBottom:10,
    },
    paymentMediaStyle:{
        flexDirection:'row',
        paddingBottom:10,
    }, 
    ImageStyle:{
        width:80,
        height:50,
    },
    imageContainer:{
        width:80,
        height:50,
        paddingLeft:10, 
        paddingHorizontal:10,
        paddingRight:20,
    },
    textInputStyle:{
        paddingVertical:10, 
        width:360, 
        height:40, 
        fontSize:15,
        fontWeight:'700',
        backgroundColor:'#fce4ec',
        marginBottom:10,
        borderRadius:20,
        paddingLeft:10
    }
})