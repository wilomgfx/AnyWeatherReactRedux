import Api from '../api/index';

export const weatherActionTypes = {
  FETCH_CURRENT_WEATHER_PENDING: 'FETCH_CURRENT_WEATHER_PENDING',
  FETCH_CURRENT_WEATHER_SUCCESS: 'FETCH_CURRENT_WEATHER_SUCCESS',
  FETCH_CURRENT_WEATHER_FAILURE: 'FETCH_CURRENT_WEATHER_FAILURE'
}

const actionCreators = {
  getCurrentWeather: () => (dispatch) => {
    dispatch({type : weatherActionTypes.FETCH_CURRENT_WEATHER_PENDING});
    new Api().getFromMyLocation()
      .then(({data}) =>{
      return dispatch(actionCreators.fetchWeatherSuccess(data))
    })
      .catch((error) => {
        return dispatch(actionCreators.fetchWeatherFailure(error))
      })
  },
  fetchWeatherSuccess: (stats) => {
    return {type: weatherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS, stats: stats}
  },
  fetchWeatherFailure: (error) => {
    return {type: weatherActionTypes.FETCH_CURRENT_WEATHER_FAILURE, error: error}
  },
}


export default actionCreators;
