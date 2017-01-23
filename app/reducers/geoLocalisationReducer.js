import { geoLocalisationActionTypes as types }   from '../actions/index'

const initialState = {
  isLocating: false,
  coordinates :  {
    lat: '',
    long: ''
  }
}

const geoLocalisationReducer = (state = initialState, action) => {
  const {type, payload} = action
  switch(type) {
    case types.GET_CURRENT_LOCATION_PENDING: {
      return {
        ...state,
        isLocating: true,
        error: null
      }
    }
    case types.GET_CURRENT_LOCATION_SUCCESS: {
      return {
        ...state,
        isLocating: false,
        coordinates : action.coordinates,
        error: null
      }
    }
    case types.GET_CURRENT_LOCATION_FAILURE: {
      return {
        ...state,
        isLocating: false,
        localisation: {},
        error: action.error
      }
    }
    default: {
      return state
    }
  }
}
export default geoLocalisationReducer;