import redux, { createStore } from 'redux';
import {Provider, store } from 'react-redux';
import reducer from 'react-redux'
import {stackNavigator} from 'react-navigation'
import {StyleSheet, 
      View, 
      Text, 
      TextInput,
     TouchableOpacity} from 'react-native'


let store = createStore(reducer);
class actions extends React.Component{
    render(){
        return(
            <View>

            </View>
        );
    }
}