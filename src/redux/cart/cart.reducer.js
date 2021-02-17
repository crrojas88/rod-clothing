import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';
// initial state for cart component, tracks the cart dropdown as hidden, and empty
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            } 
            // new case listens for ADD_ITEM action so that when new action comes in, a new state array is returned with existing cartItems while appending the item payload.
            case CartActionTypes.ADD_ITEM:
                return {
                    ...state,
                    cartItems: addItemToCart(state.cartItems, action.payload)
                }
            default:
                return state
    }

}

export default cartReducer