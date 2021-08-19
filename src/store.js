import * as searchRobots from './reducers/searchRobots';
import * as robots from './reducers/robots';
import { configureStore } from '@reduxjs/toolkit';
import {combineReducers, createStore, applyMiddleware } from 'redux';
import rootSaga from './sagas/root';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    searchRobots: searchRobots.default,
    robots: robots.default
});

let store = configureStore({
    reducer: reducer,
    devtools: true,
    middleware: [ sagaMiddleware ],
});

sagaMiddleware.run(rootSaga);

export default store;