import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { requestRobots } from './redux/reducers'
import thunkMiddleware from 'redux-thunk'

const logger = createLogger()

const rootReducer = combineReducers({ requestRobots })

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'))

serviceWorker.unregister()