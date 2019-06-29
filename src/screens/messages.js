import React from 'react';
import PropTypes from 'prop-types';
import {
  View, 
  StyleSheet,
  ViewPropTypes 
} from 'react-native';

import {Avatar, Day, utils, Message } from 'react-native-gifted-chat';
import Bubble from './chat';


const {isSameUser, isSameDay} = utils;

export default class SlackMessage extends React.Component{
    getInnerComponentProps(){
        const {containerStyle, ...props} = this.props;
        return{
            ...props,
            position:'left',
            isSameUser,
            isSameDay,
        };
    }
renderDay(){
    if(this.props.currenMessage.createdAt){
        const dayProps = this.getInnerComponentProps();
        if(this.props.renderDay){
            return this.props.renderDay(dayProps);
        }
        return <Day {...dayProps}/>;
    }
    return null;
}

renderBubble(){
    const bubbleProps = this.getInnerComponentProps();
    if(this.props.renderBubble){
        return this.props.renderBubble(bubbleProps);
    }
    return <Bubble {...props}/>
}

renderAvatar(){
    let extraStyle;
    if(
        isSameUser(this.props.currenMessage, this.props.previousMessage) && 
        isSameDay(this.props.currentMessage, this.props.previousMessage)

    ){
        extraStyle ={height:0};
    }

    const avatarProps= this.getInnerComponentProps();
    return (
        <Avatar
        {...avatarProps}
        imageStyle={{left:[style.slackAvatar, avatarProps.imageStyle, extraStyle]}}
        />
    )

}

render(){
    const marginBottom=isSameUser(this.props.currentMessage, this.props.nextMessage) ? 2:10;
    return(
        <View 
        style={[styles.container, {marginBottom:10}, this.props.containerStyle]} >
          {this.renderAvatar}
          {this.renderBubble}
        </View>
    )
}


}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-start',
        marginLeft:8,
        marginRight:0
    },
    slackAvatar:{
        height:40,
        width:40,
        borderRadius:3,
    }
});

Message.defaultProps = {
    renderAvatar: undefined,
    renderBubble:null,
    renderDay:null,
    currenMessage:{},
    nextMessage:{},
    previousMessage: {},
    user:{},
    containerStyle:{},
};

Message.PropTypes ={
    renderAvatar:PropTypes.func,
    renderBubble:PropTypes.func,
    renderDay:PropTypes.func,
    currentMessage:PropTypes.object,
    previousMessage:PropTypes.object,
    user:PropTypes.object,
    containerStyle:PropTypes.shape({
        left:ViewPropTypes.style,
        right:ViewPropTypes.style,
    }),
}































































































































































































































// import React from 'react';
// import {View, StyleSheet, TextInput, KeyboardAvoidingView, Button} from 'react-native';
// // import {GiftedChat} from 'react-native-gifted-chat';
// import * as firebase from 'firebase'
// import {ImagePicker} from 'react-native-image-picker';
// const firebaseConfig = {
//     apiKey: "AIzaSyADHhYxelHjsi0YsAEXT9iyLcFA24xlmMg",
//     authDomain: "escroll-ed3c7.firebaseapp.com",
//     databaseURL: "https://escroll-ed3c7.firebaseio.com",
//     projectId: "escroll-ed3c7",
//     storageBucket: "",
//     messagingSenderId: "877689705876",
//     appId: "1:877689705876:web:57bdcc1e00b22054"
//   };


// export default class Message extends React.Component{
//     _handleChoosePhoto=()=>{
//       const options ={noData:true};
//       ImagePicker.launchImageLibrary(options, response=>{
//           console.log("response", response);
//       })
//     }

//     render(){
//         return(
//             <KeyboardAvoidingView style={styles.container} behavior='position' enabled>
//              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
//                <TextInput
//                style={styles.textStyle}
//                placeholder='type message'
//                />
//             <View style={{ height:60,width:50, justifyContent:'flex-end'}}>
//                <Button
//                title='+'
//                onPress = {this._handleChoosePhoto}
//                color='green'
//                />
//              </View>
//              </View>
//             </KeyboardAvoidingView>
//         );
//     }
// }
// const styles=StyleSheet.create({
//     container:{
//        flex:1,
//        backgroundColor:'#d7ccc8',
//        justifyContent:'flex-end',
//        paddingBottom:10,
//        paddingRight:10,
//        paddingLeft:10,
//     },
//     viewstyle:{
//       justifyContent:'flex-end',
//       alignItems:'center',

//     },
//     textStyle:{
//        fontWeight:'normal',
//        fontSize:16,
//        width:310,
//        height:50,
//        borderRadius:25,
//        backgroundColor:'#fafafa',
//        paddingLeft:20,
//        alignItems:'stretch',
       
      


//     }
// })