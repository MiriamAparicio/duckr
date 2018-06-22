import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import getRoutes from './config/routes'
import users from 'redux/modules/users'
import restricted from './helpers/restricted'

const store = createStore(users, applyMiddleware(thunk))

function checkAuth (component) {
  return restricted(component, store)
}

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(checkAuth)}
  </Provider>,
  document.getElementById('app'))
