import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';

// views
import {Home, CheckinInit, CheckinComplete} from './views'
// import {Login} from './views/login'

export default class App extends React.Component {

    render() {
        return <Router>
            <Scene key="root">

                <Scene key="home" initial={true} component={Home}/>
                <Scene key="checkinInit"   component={CheckinInit}/>
                <Scene key="checkinComplete"  component={CheckinComplete}/>
            </Scene>
        </Router>
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});