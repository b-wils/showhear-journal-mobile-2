import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27

// views
import {Home, CheckinInit, CheckinComplete} from './views'
// import {Home, CheckinInit} from './views'

const RootStack = StackNavigator({
  Home: {
    screen: Home,
  },
  CheckinInit: {
    screen: CheckinInit
  },
  CheckinComplete: {
    screen: CheckinComplete
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}