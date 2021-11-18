export const addItemToCart = (cartItems, cartitemToAdd) => {
  const exists = existingCartItem(cartItems, cartitemToAdd);
  if (exists) {
    return cartItems.map(cartItem =>
      cartItem.id === cartitemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartitemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const exists = existingCartItem(cartItems, cartItemToClear);
  if (exists) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const exists = existingCartItem(cartItems, cartItemToRemove);

  if (exists.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const existingCartItem = (cartItems, cartItemToFind) => {
  return cartItems.find(cartItem => cartItem.id === cartItemToFind.id);
};
