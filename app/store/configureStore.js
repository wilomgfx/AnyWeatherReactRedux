import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers/index'
const middleware = [thunk]

// Can use a preloaded initialState if available, in this case we don't
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  )
);

export default store;