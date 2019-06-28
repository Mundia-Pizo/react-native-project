import React from 'react';
import { StyleSheet,
   Text,
   View } from 'react-native';


export default class Logo extends React.Component {
  render() {
    return (
         <View>
          <Text style={styles.logostyle}>eScroll</Text>
          <Text style={styles.gettinstartedStyle}>Getting started </Text>
          </View>
    )
  }
}


const styles = StyleSheet.create({
  logostyle: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 60,
    fontStyle:'italic',
    color:'orange'


  },
  gettinstartedStyle:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 40,
    color:'#ffff'
  }
});
