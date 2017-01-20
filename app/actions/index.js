import Api from '../api/index';

const api = new Api();

const weatherActionTypes = {
  FETCH_CURRENT_WEATHER_PENDING: 'FETCH_CURRENT_WEATHER_PENDING',
  FETCH_CURRENT_WEATHER_SUCCESS: 'FETCH_CURRENT_WEATHER_SUCCESS',
  FETCH_CURRENT_WEATHER_FAILURE: 'FETCH_CURRENT_WEATHER_FAILURE'
}

export const actionCreators = {
  getCurrentWeather: () => (dispatch) => {
    dispatch({type : weatherActionTypes.FETCH_CURRENT_WEATHER_PENDING});
    this.api.getFromMyLocation()
      .then((response) =>{
      dispatch(this.fetchWeatherSuccess(response))
    })
      .catch((error) => {
        dispatch(this.fetchWeatherFailure(error))
      })
  },
  fetchWeatherSuccess: (weather) => {
    return {type: weatherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS, weather: weather}
  },
  fetchWeatherFailure: (error) => {
    return {type: weatherActionTypes.FETCH_CURRENT_WEATHER_FAILURE, error: error}
  },
}


export default weatherActionTypes;
