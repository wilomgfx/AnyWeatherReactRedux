import { combineReducers } from 'redux'

import weather from './currentWeatherReducer';
import localisation from './geoLocalisationReducer';

const reducer = combineReducers({
  weather,
  localisation
})

export default reducer;