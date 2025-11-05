export const calcTotal = (cart) => {
  const totalPrice = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  return totalPrice;
};
