

import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import blogApp from './modules/blogApp';

const loggerMiddleware = createLogger(); // initialize logger
const createStoreWithMiddleware = applyMiddleware(loggerMiddleware,thunk)(createStore); // apply logger to redux
const reducer = combineReducers({blogApp});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;