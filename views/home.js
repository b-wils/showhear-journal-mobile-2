import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button'
import {Actions} from 'react-native-router-flux'

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Showhear Journal Home!
        </Text>
        <Button
            onPress={Actions.checkinInit}
        >
            Check In
        </Button>
      </View>
    );
  }
  _handleCheckinPress(event) {
    console.log('hi!');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
