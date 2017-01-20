//Created by wcantin on 2017-01-20.
import React, {Component, PropTypes} from 'react'
import {View, StyleSheet, Text} from 'react-native'

const styles = StyleSheet.create({
  content : {
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : 'red'
  }
});

export default class Main extends Component {

  componentWillMount(){

  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.content}>
        <Text>Hello</Text>
      </View>
    );
  }
}