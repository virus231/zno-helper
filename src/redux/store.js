import {createStore, compose, applyMiddleware} from 'redux'
import authReducer from './reducer/AuthReducer'
import thunk from 'redux-thunk'

const composeEnhnacers = window.__REDUX_DEVTOOLS__EXTENSION__COMPOSE || compose;

const store = createStore(
    authReducer,composeEnhnacers(applyMiddleware(thunk)))

export default store;
