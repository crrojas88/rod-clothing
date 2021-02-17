// utility function that allows multiple items to be grouped into a quantity value which will allow us to also remove items.
export const addItemToCart =(cartItems, cartItemToAdd) => {
    // checking to see if current cartItem id matches added cartItem id to create existingCartItem, otherwise returns null.
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        )

        if (existingCartItem) {
            return cartItems.map(cartItem =>
                cartItem.id === cartItemToAdd.id
                // conditionally create a new object with the quantity increased by 1 if cartItem.id and cartItemToAdd.id match, otherwise return original cartItem.
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
                )
        }
                // return a new array with existing cartItems and add object that is equal to cartItemToAdd with a base quantity of 1.
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
        // quantity property gets added the first time around since the if statement will not run when it's a new item.
}