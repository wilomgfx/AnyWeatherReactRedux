import Api from '../api/index';

export const weatherActionTypes = {
  FETCH_CURRENT_WEATHER_PENDING: 'FETCH_CURRENT_WEATHER_PENDING',
  FETCH_CURRENT_WEATHER_SUCCESS: 'FETCH_CURRENT_WEATHER_SUCCESS',
  FETCH_CURRENT_WEATHER_FAILURE: 'FETCH_CURRENT_WEATHER_FAILURE'
}

export const geoLocalisationActionTypes = {
  GET_CURRENT_LOCATION_PENDING : 'GET_CURRENT_LOCATION_PENDING',
  GET_CURRENT_LOCATION_SUCCESS : 'GET_CURRENT_LOCATION_SUCCESS',
  GET_CURRENT_LOCATION_FAILURE : 'GET_CURRENT_LOCATION_FAILURE',
}

const actionCreators = {
  getCurrentWeather: (payload) => (dispatch) => {
    dispatch({type: weatherActionTypes.FETCH_CURRENT_WEATHER_PENDING});
    new Api().getCurrentWeather(payload)
      .then(({data}) => {
        console.info(data);
        return dispatch(actionCreators.fetchWeatherSuccess(data))
      })
      .catch((error) => {
        console.error(error);
        return dispatch(actionCreators.fetchWeatherFailure(error))
      })
  },
  fetchWeatherSuccess: (stats) => {
    return {type: weatherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS, stats}
  },
  fetchWeatherFailure: (error) => {
    return {type: weatherActionTypes.FETCH_CURRENT_WEATHER_FAILURE, error}
  },
  getGeoLocalisationSuccess: (coordinates) => {
    return {type: geoLocalisationActionTypes.GET_CURRENT_LOCATION_SUCCESS, coordinates}
  },
  getGeoLocalisationFailure: (error) => {
    return {type: geoLocalisationActionTypes.GET_CURRENT_LOCATION_FAILURE, error}
  },
  getCurrentGeoLocalisation: () => (dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = position;
        const {latitude , longitude } = initialPosition.coords;
        dispatch({type: geoLocalisationActionTypes.GET_CURRENT_LOCATION_PENDING});
        dispatch(actionCreators.getGeoLocalisationSuccess({
          lat: latitude,
          long: longitude
        }));
        dispatch(actionCreators.getCurrentWeather({latitude, longitude}));
      },
      (error) => dispatch(actionCreators.getGeoLocalisationFailure(error)),
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
    );
  }
}


export default actionCreators;
