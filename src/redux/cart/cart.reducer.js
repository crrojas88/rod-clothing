import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

// Initial state for cart component, tracks the cart dropdown as hidden, as well as empty.
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

// cartReducer brings functionality to cart dropdown as well as add, reduce and remove actions in checkout page and collection item component. 
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Case that toggles cart dropdown.
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            } 
            // Listens for ADD_ITEM action so that when new action comes in, a new state array is returned with existing cartItems while appending the item payload.
            case CartActionTypes.ADD_ITEM:
                return {
                    ...state,
                    cartItems: addItemToCart(state.cartItems, action.payload)
                }
                case CartActionTypes.REMOVE_ITEM:
                    return {
                        ...state,
                        cartItems: removeItemFromCart(state.cartItems, action.payload)
                    }
                case CartActionTypes.CLEAR_ITEM_FROM_CART:
                    return {
                        ...state,
                        // filter through existing cartItems array so if cartItem.id does not match action.payload.id then keep item. Otherwise filter out.
                        cartItems: state.cartItems.filter(
                            cartItem => cartItem.id !== action.payload.id
                            )
                    }
            default:
                return state
    }

}

export default cartReducer