import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = []

// if node environment is development, push logger into middlewares array. Otherwise, if its production or test we don't want it.
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
// calls persistStore passing in store to be used with a provider in the application fro storing cart session.
export const persistor = persistStore(store)

// export default { store, persistor }