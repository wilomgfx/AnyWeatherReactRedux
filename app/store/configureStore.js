import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { reducer } from '../reducers'
const middleware = [ thunk ]

// Can use a preloaded initialState if available, in this case we don't
export default (initialState) => {
  // http://redux.js.org/docs/api/createStore.html
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware),
    // autoRehydrate()
  )
  // https://github.com/rt2zz/redux-persist
  // persistStore(store)
  return store
}