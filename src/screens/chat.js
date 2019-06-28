import React from 'react';
import { StyleSheet,
     Text,
      View,
    Image,
    FlatList,
    TouchableOpacity, } from 'react-native';

export default class Chat extends React.Component {
  state={
    data:[
      {firstName:'kennedy', lastName:'Pizo'},
      {firstName:'Stacy',   lastName:'Pizo'},
      {firstName:'Luntagu', lastName:'Pizo'},
      {firstName:'Precious',lastName:'Pizo'},
      {firstName:'Emmanuel',lastName:'Pizo'},
      {firstName:'Bridget', lastName:'Pizo'},
      {firstName:'Euphrasia',lastName:'Pizo'},
      {firstName:'Grace',   lastName:'Pizo'},
      {firstName:'Baxton',  lastName:'Pizo'},
      {firstName:'Daniel', lastName:'Pizo'},
      {firstName:'Joy',    lastName:'Pizo'},
      {firstName:'Joan',   lastName:'Pizo'},
    ]
  };

  render() {
    return (
      <View style={styles.container}>
       <FlatList
       data={this.state.data}
       renderItem={
           ({item})=>
           <View style={styles.chatStyle} >
             <TouchableOpacity 
             style={{flexDirection:'row', paddingRight:10}}
             onPress={()=>this.props.navigation.navigate('Message')}>
               <View style={{paddingRight:20}}>  
                 <Image
                     source={require('../images/mundia.jpg')} 
                       style={styles.imagestyle}/></View>

                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textStyle}>{item.firstName}  </Text>
                    <Text style={styles.textStyle}>{item.lastName}</Text></View>
           
           </TouchableOpacity>
           </View>
       }
       keyExtractor={(item, index) => item.firstName}
       />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: 'rgba(200,200,200, 0.8)',
      paddingLeft:10,
    },
    chatStyle:{
      paddingVertical:15,
      flexDirection:'row',
      paddingRight:10,

    },
    imagestyle:{
        height:60,
        width:60,
        borderRadius:30,
        paddingLeft:16,

    },

    textStyle:{
      borderColor:'orange',
      fontSize:20,
      color:'#000000',
      fontWeight:'500',

    } 
});

 