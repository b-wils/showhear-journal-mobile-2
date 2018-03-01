import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Showhear Journal Home!
        </Text>
        <Button
            title='Check In'
            onPress={() => this.props.navigation.navigate('CheckinInit')}
        />
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
