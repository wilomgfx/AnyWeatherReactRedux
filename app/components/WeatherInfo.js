// //Created by wcantin on 2017-01-20.
// import React, {Component, PropTypes} from 'react'
// import {View, ScrollView,  StyleSheet, Text} from 'react-native'
//
// import TodaysWeater from './TodaysWeather';
// import CurrentWeather from './CurrentWeather';
// import MapViewer from './MapViewer';
//
// import getWeatherIconByIconName from '../utils/icons';
//
// import { Tabs, Tab, Icon } from 'react-native-elements'
//
// const styles = StyleSheet.create({
//   content: {
//     backgroundColor: 'white',
//     flex:1
//   },
//   tabBar:{
//     top:0,
//   },
//   tabs:{
//     borderRightWidth:1,
//     borderRightColor:'gray'
//   },
//   text: {
//     fontSize:20,
//     textAlign:'center'
//   },
//   header: {
//     fontSize: 40
//   },
//   subHeader: {
//     fontSize:30,
//     color: 'black'
//   },
//   section: {
//     flex:1,
//     alignSelf:'stretch',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// });
//
// export default class WeatherInfo extends Component {
//
//   constructor(props) {
//     super(props);
//      this.state = {
//       selectedTab: 'todaysWeater'
//     }
//   }
//
//   changeTab (selectedTab) {
//     this.setState({selectedTab})
//   }
//
//   outPutWeatherData(){
//     const { currently, daily } = this.props.weather.stats;
//
//     const { selectedTab } = this.state
//     return (
//       <View style={styles.content}>
//
//       </View>
//     );
//   }
//
//   render() {
//       const statsAreEmpty = Object.getOwnPropertyNames(this.props.weather.stats).length === 0;
//       return (
//         <View style={styles.content}>
//           {!statsAreEmpty && this.outPutWeatherData()}
//         </View>
//       );
//   }
// }