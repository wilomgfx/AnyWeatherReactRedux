import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function getWeatherIconByIconName(darkSkyIconName){
  switch (darkSkyIconName){
    case 'clear-day':
      return <Icon name="weather-sunny" size={30} color="white" />
    case 'partly-cloudy-night':
      return <Icon name="weather-night" size={30} color="white" />
    default:
      return <Icon name="weather-cloudy" size={30} color="white" />
  }
}

