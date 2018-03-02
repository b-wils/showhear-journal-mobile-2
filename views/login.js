import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import {Facebook} from 'expo';

import {loginUser, getFacebookToken} from '../redux/user'

class Login extends React.Component {
  render() {
    return (
      <View>
        <Text>Login to facebook with Expo</Text>
        <Button
          title="Login"
          onPress={() => this.loginPress()}
        />
        <Text> Your facebook token is {this.props.facebookToken} </Text>
      </View>
    );
  }

  loginPress() {
    this.props.dispatch(loginUser())
  }
}

function mapStateToProps(state, ownProps) {
  return {facebookToken: getFacebookToken(state)};
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