import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})
// defines the action as a function that gets an item and generates a new action with CartActionType defined and sets the payload as the item passed
export const addItem = item => ({
    type:CartActionTypes.ADD_ITEM,
    payload: item
})