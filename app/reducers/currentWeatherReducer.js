import types  from '../actions/index'

const initialState = {
  isFetching: false,
  weather: {}
}

const reducer = (state = initialState, action) => {
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
        weather: action.weather,
        error: null
      }
    }
    case types.FETCH_CURRENT_WEATHER_FAILURE: {
      return {
        ...state,
        isFetching: false,
        weather: {},
        error: action.error
      }
    }
    default: {
      return state
    }
  }
}
export default reducer;