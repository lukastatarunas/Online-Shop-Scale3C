import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { requestRobots, enterItemAmount, addOrDeleteItems, showPrice } from './redux/reducers'
import thunkMiddleware from 'redux-thunk'

const logger = createLogger()

const rootReducer = combineReducers({ requestRobots, enterItemAmount, addOrDeleteItems, showPrice })

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'))

serviceWorker.unregister()