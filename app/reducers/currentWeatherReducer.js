import { weatherActionTypes as types }   from '../actions/index'

const initialState = {
  isFetching: false,
  stats :  {}
}

const currentWeatherReducer = (state = initialState, action) => {
  const {type, payload} = action
  switch(type) {
    case types.FETCH_CURRENT_WEATHER_PENDING: {
      return {
        ...state,
        isFetching: true,
        error: null
      }
    }
    case types.FETCH_CURRENT_WEATHER_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        stats : action.stats,
        error: null
      }
    }
    case types.FETCH_CURRENT_WEATHER_FAILURE: {
      return {
        ...state,
        isFetching: false,
        stats: {},
        error: action.error
      }
    }
    default: {
      return state
    }
  }
}
export default currentWeatherReducer;