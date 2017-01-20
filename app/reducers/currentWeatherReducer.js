import types  from '../actions/index'

const initialState = {
  isFetching: false,
  items: []
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
        items: action.items,
        error: null
      }
    }
    case types.FETCH_CURRENT_WEATHER_FAILURE: {
      return {
        ...state,
        isFetching: false,
        items: [],
        error: action.error
      }
    }
    default: {
      return state
    }
  }
}
export default reducer;