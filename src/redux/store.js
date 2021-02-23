import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
// calls persistStore passing in store to be used with a provider in the application fro storing cart session.
export const persistor = persistStore(store)

export default { store, persistor }