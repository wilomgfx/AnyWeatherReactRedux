//Created by wcantin on 2017-01-20.
import React, {Component, PropTypes} from 'react'
import {View, StyleSheet, Text} from 'react-native'

import moment from 'moment';

import getWeatherIconByIconName from '../utils/icons';

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

export default class CurrentWeather extends Component {

  constructor(props) {
    super(props);
  }

  millibarToKpa(mb){
    return Math.floor(mb/10);
  }

  outPutWeatherData(){
    const currently = this.props.currently;
    return (
      <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.header}>Currently</Text>
            {getWeatherIconByIconName(currently.icon, 80, 'black')}
            <Text style={styles.text}>{currently.summary}</Text>
            <Text style={styles.text}>Temperature : {currently.temperature}</Text>
            <Text style={styles.text}>Feels like : {currently.apparentTemperature}</Text>
            <Text style={styles.text}>Pressure : {this.millibarToKpa(currently.pressure)} kPa</Text>
          </View>
      </View>
    );
  }

  render() {
      return (
        <View style={styles.content}>
          {this.outPutWeatherData()}
        </View>
      );
  }
}