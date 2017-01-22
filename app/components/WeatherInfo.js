//Created by wcantin on 2017-01-20.
import React, {Component, PropTypes} from 'react'
import {View, ScrollView,  StyleSheet, Text} from 'react-native'
import moment from 'moment';

import TodaysWeater from './TodaysWeather';
import CurrentWeather from './CurrentWeather';

import getWeatherIconByIconName from '../utils/icons';

import { Tabs, Tab, Icon } from 'react-native-elements'

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    flex:1
  },
  tabBar:{
    top:0,
  },
  tabs:{
    borderRightWidth:1,
    borderRightColor:'gray'
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

export default class WeatherInfo extends Component {

  constructor(props) {
    super(props);
     this.state = {
      selectedTab: 'currentWeather',
    }
  }

  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

  millibarToKpa(mb){
    return Math.floor(mb/10);
  }

  outPutWeatherData(){
    const { currently, daily } = this.props.stats;
    const { selectedTab } = this.state
    return (
      <View style={styles.content}>
        <Tabs tabBarStyle={styles.tabBar} tabBarShadowStyle={{bottom:0, top: null}}>
          <Tab tabStyle={styles.tabs}
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            selected={selectedTab === 'todaysWeater'}
            title={'Todays weather'}
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
            onPress={() => this.changeTab('todaysWeater')}>
            <TodaysWeater daily={daily}/>
          </Tab>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            selected={selectedTab === 'currentWeather'}
            title={'Current weather'}
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 19}} color={'#5e6977'} type="ionicon" name='md-time' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} type="ionicon" name='md-time' size={30} />}
            onPress={() => this.changeTab('currentWeather')}>
            <CurrentWeather currently={currently}/>
          </Tab>
        </Tabs>
      </View>
    );
  }

  render() {
      const statsAreEmpty = Object.getOwnPropertyNames(this.props.stats).length === 0;
      return (
        <View style={styles.content}>
          {!statsAreEmpty && this.outPutWeatherData()}
        </View>
      );
  }
}