import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {Facebook} from 'expo';

export class Login extends React.Component {
  render() {
    return (
      <View>
        <Text>Login to facebook with Expo</Text>
        <Button
          title="Login"
          onPress={() => login()}
        />
      </View>
    );
  }
}

async function login() {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('159441374775648', {
      permissions: ['public_profile'],
    });
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
    Alert.alert(
      'Logged in!',
      `Hi ${(await response.json()).name}!`,
    );
  } 
}