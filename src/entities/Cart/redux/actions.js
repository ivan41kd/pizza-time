export const calcPrice = (price, quantity) => {
  return price * quantity;
};

export const addPizza = (pizza) => {
  return {
    type: 'ADD',
    payload: { pizza },
  };
};

export const removePizza = (pizza) => {
  return {
    type: 'DELETE',
    payload: { pizza },
  };
};
export const increasePizza = (pizza) => {
  return {
    type: 'INCREASE',
    payload: { pizza },
  };
};
export const decreasePizza = (pizza) => {
  return {
    type: 'DECREASE',
    payload: { pizza },
  };
};
