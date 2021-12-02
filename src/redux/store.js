import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { fetchCollectionsStart } from './shop/shop.sagas';

import rootReducer from './root-reducer';

const sagaMiddleWare = createSagaMiddleware();

// const middlewares = [thunk];
const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWare.run(fetchCollectionsStart);

export const persistor = persistStore(store);
