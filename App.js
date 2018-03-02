import React from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux'
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27

// views
import {Home, CheckinInit, CheckinComplete, Login} from './views'

import store from './redux/store'

const INITIAL_ROUTE_NAME = 'Login'

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    CheckinInit: {
      screen: CheckinInit
    },
    CheckinComplete: {
      screen: CheckinComplete
    },
    Login: {
      screen: Login
    }
  },
  {
    initialRouteName: INITIAL_ROUTE_NAME,
  }
);

export default class App extends React.Component {
  render() {
    return (
              <Provider store={store}>
                <RootStack/>
              </Provider>
            )

  }
}