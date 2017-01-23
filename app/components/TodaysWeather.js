//Created by wcantin on 2017-01-20.
import React, {Component, PropTypes} from 'react'
import {View, ScrollView,  StyleSheet, Text} from 'react-native'

import moment from 'moment';
import _ from 'lodash';

import getWeatherIconByIconName from '../utils/icons';

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    flex:1,
    marginTop:20
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
    color: 'black',
    textAlign:'center'
  },
  section: {
    flex:1,
    alignSelf:'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default class TodaysWeather extends Component {

  constructor(props) {
    super(props);
  }

  millibarToKpa(mb){
    return Math.floor(mb/10);
  }

  outPutWeatherData(){
    const daily = this.props.daily;
    const today = daily.data[0];
    const day = moment.unix(daily.data[0].time);
    const titleText = `Today\n ${day.format("dddd, D MMMM YYYY")}`;
    return (
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={[styles.text, styles.header]}>{titleText}</Text>
          {getWeatherIconByIconName(daily.icon, 80, 'black', {textAlign:'center'})}
          <Text style={styles.text}>{daily.summary}</Text>
          <Text style={styles.text}>Proababilily : {today.precipProbability *100}% chance</Text>
          {today.precipAccumulation && <Text style={styles.text}>Accumulation : {today.precipAccumulation} cm</Text>}
          <Text style={styles.text}>Min : {today.temperatureMin}</Text>
          <Text style={styles.text}>Max : {today.temperatureMax}</Text>
        </View>
      </View>
    );
  }

  render() {
      const daily = this.props.daily;
      return (
        <View style={styles.content}>
          {!_.isEmpty(daily) && this.outPutWeatherData()}
          {_.isEmpty(daily) && <Text style={{marginTop:50, textAlign:'center', fontSize: 40}}>Loading...</Text>}
        </View>
      );
  }
}