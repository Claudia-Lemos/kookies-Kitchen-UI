export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

// Action to add an item to the cart
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

// Action to remove an item from the cart
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});


export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
