//Created by wcantin on 2017-01-20.
import React, {Component, PropTypes} from 'react'
import {View, StyleSheet, Text } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actionCreators from '../actions/index';

import { Router, Scene, Modal, ActionConst } from 'react-native-router-flux'

import Main from '../components/Main'

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf: 'stretch',
    backgroundColor : 'blue'
  }
});

class ViewContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>
        <Main {...this.props} />
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    weather : state.weather,
    localisation : state.localisation
  }
}
function mapDisPatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDisPatchToProps)(ViewContainer)