import React from 'react';
import {TouchableOpacity, 
    TextInput, 
    View, 
    StyleSheet, 
    Text,
    ScrollView} from 'react-native';

export default class Blog extends React.Component{

    render(){
        return(
             <View style={styles.MainContainerStyle}>
                 <ScrollView
                 showsVerticalScrollIndicator={false}
                 >
                     <View>
                     <Text style={styles.textstyle}>Hello from blog.js</Text>
                     <Text>This is where you will be adding the items from in the 
                         blog of the app. please eddit this section to get the most of the app
                         and for it to scale it needs more features and the 
                     </Text>
                     </View>

                 </ScrollView>
                
             </View>
        );
    }
} 

const styles= StyleSheet.create({
 MainContainerStyle:{
     backgroundColor:'white',
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     paddingHorizontal:10,
 },
 textstyle:{
     fontSize: 40,
     fontWeight:'500',
     color:'brown',
 }

})
