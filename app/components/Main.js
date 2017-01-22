//Created by wcantin on 2017-01-20.
import React, {Component, PropTypes} from 'react'
import {View, ScrollView,  StyleSheet, Text} from 'react-native'

import moment from 'moment';

import getWeatherIconByIconName from '../utils/icons';

import WeatherInfo from './WeatherInfo';

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    flex:1
  },
  text: {
    fontSize:20,
    textAlign:'center'
  },
  header: {
    fontSize: 40
  },
  subHeader: {
    fontSize:30,
    color: 'black'
  },
  section: {
    flex:1,
    alignSelf:'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default class Main extends Component {

  componentWillMount(){
    this.props.getCurrentWeather();
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { stats } = this.props.weather;
    const statsAreEmpty = Object.getOwnPropertyNames(stats).length === 0;

      return (
        <View style={styles.content}>
          <WeatherInfo stats={stats} />
        </View>
      );
  }
}