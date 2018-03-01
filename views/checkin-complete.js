import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

var testArtists = ['Hikes', 'Boyfrndz', 'Chipper Jones'];

export class CheckinComplete extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          We've checked you into {this.props.venue} without edits
        </Text>
        <Text style={styles.welcome}>
          The bands tonight are:
        </Text>
        { testArtists.map(function(item) {
                return <ArtistButton name={item} key={item}/>
            })
        }
      </View>
    );
  }
}

class ArtistButton extends React.Component {
  render() {
    return (
      <Button
          title={this.props.name}
      />
    );
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