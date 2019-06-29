import Login from './login';
import Chat from './chat';
import Signup from './signup';
import Store from './store';
import Payment from './payments';
import Message from './messages';
import Settings from './settings';
import Blog from './blog';
import Logout from './logout';
import MessageCenter from './messagemain';


import {Button, View} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import * as React from 'react';


import {createSwitchNavigator,
     createStackNavigator,
     createDrawerNavigator,
     createTabNaviagator,
     createAppContainer,
     createBottomTabNavigator,
     Header
     } from 'react-navigation';


const bottonNavigator=createBottomTabNavigator(
     { 
        Chat:{screen:MessageCenter },
        Message:{screen:Message},
        Store:{screen:Store},
        Settings:{screen:Settings}, 
     },
     {
       navigationOptions:({navigation})=>{
           const {routeName} = navigation.state.routes[navigation.state.index];
          return{
              headerTitle:routeName
          } 
       },
       initialRouteName:'Store',
       activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle:{backgroundColor:'#494949'
     },
    });


const AppStacknavigator=createStackNavigator(
{
    bottonNavigator:bottonNavigator,
    Payment:{screen:Payment},
    blog:{screen:Blog},
    Chat:{screen:MessageCenter},
    
},
{
    defaultNavigationOptions:({navigation})=>{
        return{
            headerLeft:(
                <Icon 
                onPress={()=>navigation.openDrawer()}
                style={{paddingLeft:10}} name ='md-menu' size={30}/>
            ),
            headerRight:(
                <View style={{paddingRight:10}}>
                <Button
                title='Home'
                onPress={()=>navigation.navigate('Store')}
                color='orange'/>
                </View>
            )
            }
    }
})
const AppDrawNavigator=createDrawerNavigator({
   Home:AppStacknavigator,
   Store:{screen:Store},
   chat:{screen:MessageCenter},
   Payment:{screen:Payment},
   Settings:{screen:Settings},
   blog:{screen:Blog},
   logout:{screen:Logout},
     
})

const AppSwitchNavigator=createSwitchNavigator({
    login:{screen:Login},
    signup:{screen:Signup},
    dashboard:{screen:AppDrawNavigator},
})     
export default createAppContainer(AppSwitchNavigator)