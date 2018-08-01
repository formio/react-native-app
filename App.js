import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formio} from 'react-native-formio/src';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Formio Demo</Text>
        <Formio src={'https://examples.form.io/example'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    marginTop: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
});
