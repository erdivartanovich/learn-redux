import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import todoApp from './reducers';
import App from './app'
const logger = createLogger();
let store = createStore(todoApp, applyMiddleware(thunkMiddleware));
const Main = (props) => (<Provider store={store}>
    <App/>
</Provider>);
export default Main
