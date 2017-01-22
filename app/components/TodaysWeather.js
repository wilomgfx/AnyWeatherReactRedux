//Created by wcantin on 2017-01-20.
import React, {Component, PropTypes} from 'react'
import {View, ScrollView,  StyleSheet, Text} from 'react-native'

import moment from 'moment';

import { Card } from 'react-native-elements'

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
    const  daily = this.props.daily;
    const today = daily.data[0];
    const day = moment.unix(daily.data[0].time);
    return (
      <View style={styles.content}>
        <Card 
            containerStyle={styles.section}
            title={`Today\n ${day.format("dddd, D MMMM YYYY")}`}
            titleStyle={styles.text}
            >
            {getWeatherIconByIconName(daily.icon, 80, 'black', {textAlign:'center'})}
            <Text style={styles.text}>{daily.summary}</Text>
            <Text style={styles.text}>Proababilily : {today.precipProbability *100}% chance</Text>
            {today.precipAccumulation && <Text style={styles.text}>Accumulation : {today.precipAccumulation} cm</Text>}
            <Text style={styles.text}>Min : {today.temperatureMin}</Text>
            <Text style={styles.text}>Max : {today.temperatureMax}</Text>
        </Card>
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