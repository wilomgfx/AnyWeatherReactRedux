//Created by wcantin on 2017-01-20.
import React, {Component, PropTypes} from 'react'
import {View, ScrollView,  StyleSheet, Text} from 'react-native'

import TodaysWeater from './TodaysWeather';
import CurrentWeather from './CurrentWeather';
import MapViewer from './MapViewer';

import { Tabs, Tab, Icon } from 'react-native-elements'

import _ from 'lodash';

import WeatherInfo from './WeatherInfo';

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

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'todaysWeater'
    }
  }

  changeTab (selectedTab) {
    this.setState({selectedTab})
  }
  componentWillMount(){
    this.props.getCurrentGeoLocalisation();
  }

  render() {
      const { selectedTab } = this.state
      const { currently, daily } = this.props.weather.stats;
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
                <TodaysWeater daily={daily} />
            </Tab>
            <Tab tabStyle={styles.tabs}
                 titleStyle={{fontWeight: 'bold', fontSize: 10}}
                 selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                 selected={selectedTab === 'currentWeather'}
                 title={'Current weather'}
                 renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 19}} color={'#5e6977'} type="ionicon" name='md-time' size={33} />}
                 renderSelectedIcon={() => <Icon color={'#6296f9'} type="ionicon" name='md-time' size={30} />}
                 onPress={() => this.changeTab('currentWeather')}>
                <CurrentWeather currently={currently} />
            </Tab>
            <Tab
              titleStyle={{fontWeight: 'bold', fontSize: 10}}
              selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
              selected={selectedTab === 'hello'}
              title={'My location'}
              renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 21}} color={'#5e6977'} type="materialicons" name='my-location' size={33} />}
              renderSelectedIcon={() => <Icon color={'#6296f9'} type="materialicons" name='my-location' size={30} />}
              onPress={() => this.changeTab('hello')}>
              <MapViewer/>
            </Tab>
          </Tabs>
        </View>
      );
  }
}