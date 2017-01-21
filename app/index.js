import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store/configureStore'
import ViewContainer from './containers/ViewContainer'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ViewContainer />
      </Provider>
    )
  }
}