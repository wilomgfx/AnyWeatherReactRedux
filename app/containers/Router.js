//Created by wcantin on 2017-01-20.
import React, {Component, PropTypes} from 'react'
import {View, StyleSheet} from 'react-native'

import { Router, Scene, Modal, ActionConst } from 'react-native-router-flux'

import Main from '../components/Main'

const styles = StyleSheet.create({});

export default class AppRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Scene key={'root'}>
         <Scene key={'main'} component={Main} title={'Main'} />
        </Scene>
      </Router>
    );
  }
}