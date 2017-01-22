import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function getWeatherIconByIconName(darkSkyIconName, iconSize =30, color='white', styles= {}){
  switch (darkSkyIconName){
    case 'clear-day':
      return <Icon name="weather-sunny" size={iconSize} color={color} style={styles} />
    case 'rain':
      return <Icon name="weather-rainy" size={iconSize} color={color} style={styles} />
    case 'snow':
      return <Icon name="weather-snowy" size={iconSize} color={color} style={styles} />
    case 'sleet':
      return <Icon name="weather-snowy-rainy" size={iconSize} color={color} style={styles} />
    case 'wind':
      return <Icon name="weather-windy" size={iconSize} color={color} style={styles} />
    case 'fog':
      return <Icon name="weather-fog" size={iconSize} color={color} style={styles} />
    case 'cloudy':
      return <Icon name="weather-cloudy" size={iconSize} color={color} style={styles} />
    case 'partly-cloudy-night':
    case 'clear-night':
      return <Icon name="weather-night" size={iconSize} color={color} style={styles} />
    case 'partly-cloudy-day':
      return <Icon name="weather-partlycloudy" size={iconSize} color={color} style={styles} />
    default:
      return <Icon name="weather-cloudy" size={iconSize} color={color} style={styles} />
  }
}

