import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    // persists the cart as a string.
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})
// calling persistReducer function from redux-persist library passing persistConfig and rootReducer so rootReducer now has persistance capabilities.
export default persistReducer(persistConfig, rootReducer)