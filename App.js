import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Formio from 'formiojs/Formio'

const form = new Formio('https://examples.form.io/textfield');
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: ''
    }
  }

  componentDidMount() {
    form.loadForm().then((form) => {
      console.log(form);
      this.setState({ formData: JSON.stringify(form) })
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native Formio Demo</Text>
        <Text>{this.state.formData}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
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
