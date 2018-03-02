import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import {Facebook} from 'expo';

import {loginUser} from '../redux/user'

class Login extends React.Component {
  render() {
    console.log('render 3')
    return (
      <View>
        <Text>Login to facebook with Expo</Text>
        <Button
          title="Login"
          onPress={() => this.loginPress()}
        />
      </View>
    );
  }

  loginPress() {
    console.log('login press')
    this.props.dispatch(loginUser())
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

var wrappedComponent = connect(mapStateToProps)(Login);

export {wrappedComponent as Login} 

// async function login() {
//   const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('159441374775648', {
//       permissions: ['public_profile'],
//     });
//   if (type === 'success') {
//     // Get the user's name using Facebook's Graph API
//     const response = await fetch(
//       `https://graph.facebook.com/me?access_token=${token}`);
//     Alert.alert(
//       'Logged in!',
//       `Hi ${(await response.json()).name}!`,
//     );
//   } 
// }