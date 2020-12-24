import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middlewares: any = [thunk];

// redux add logger in development mode
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// initialize of redux store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persistor works with browser memory
export const persistor = persistStore(store);
