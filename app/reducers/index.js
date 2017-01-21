import { combineReducers } from 'redux'

import weather from './currentWeatherReducer';

const reducer = combineReducers({
  weather
})

export default reducer;