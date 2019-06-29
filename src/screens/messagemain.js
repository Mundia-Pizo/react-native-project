import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { GiftedChat } from 'react-native-gifted-chat';
import emojiUtils from 'emoji-utils';
import  {View, KeyboardAvoidingView} from  'react-native';
import SlackMessage from './messages';
import firebase from 'react-firebase';
import {KeyboardSpacer } from 'react-native-keyboard-spacer';


const firebaseConfig = {
    apiKey: "AIzaSyADHhYxelHjsi0YsAEXT9iyLcFA24xlmMg",
    authDomain: "escroll-ed3c7.firebaseapp.com",
    databaseURL: "https://escroll-ed3c7.firebaseio.com",
    projectId: "escroll-ed3c7",
    storageBucket: "",
    messagingSenderId: "877689705876",
    appId: "1:877689705876:web:57bdcc1e00b22054"


    
  };

export default class MessageCenter extends React.Component {

  
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'hello supervisor',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  renderMessage(props) {
    const { currentMessage: { text: currText } } = props;

    let messageTextStyle;

    // Make "pure emoji" messages much bigger than plain text.
    if (currText && emojiUtils.isPureEmojiString(currText)) {
      messageTextStyle = {
        fontSize: 28,
        // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
        lineHeight: Platform.OS === 'android' ? 34 : 30,
      };
    }

    return (
      <SlackMessage {...props} messageTextStyle={messageTextStyle}/>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView style={{flex:1}} bahavior={'padding'}>

      <GiftedChat
      style={{flex:1, paddingBottom:20}}
        forceGetKeyboardHeight={
            Platform.OS === 'android' && Platform.Version < 21
           }
        style={{flex:1}}
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
        renderMessage={this.renderMessage}
      />
      </KeyboardAvoidingView>
    );
  }

}