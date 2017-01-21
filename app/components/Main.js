//Created by wcantin on 2017-01-20.
import React, {Component, PropTypes} from 'react'
import {View, StyleSheet, Text} from 'react-native'

import getWeatherIconByIconName from '../utils/icons';

const styles = StyleSheet.create({
  content : {
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : 'gray'
  },
  text : {
    fontSize:30
  }
});

export default class Main extends Component {

  componentWillMount(){
    this.props.getCurrentWeather();
  }

  constructor(props) {
    super(props);
  }

  outPutWeatherData(){
    const { stats } = this.props.weather;
    const currently = stats.currently;
    return (
      <View style={styles.content}>
        <Text style={styles.text}>Temperature : {currently.temperature}</Text>
        <Text style={styles.text}>Feels like : {currently.apparentTemperature}</Text>
        {getWeatherIconByIconName(currently.icon)}
      </View>
    );
  }

  render() {
    const { stats } = this.props.weather;

    if(Object.getOwnPropertyNames(stats).length === 0){
      return (
        <View style={styles.content}>

        </View>
      );
    }
    else{
      return (
        <View style={styles.content}>
          {this.outPutWeatherData()}
        </View>
      );
    }
  }
}