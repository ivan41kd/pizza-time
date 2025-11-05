/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { message } from 'antd';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  message.config({
    top: 100,
    duration: 2,
    maxCount: 1,
    rtl: true,
    prefixCls: 'my-message',
  });

  const addToCart = (product) => {
    setCart((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.title === product.title && item.size.size === product.size.size
      );

      if (existingItem) {
        return prevItems.map((item) => {
          if (
            item.title === product.title &&
            item.size.size === product.size.size
          ) {
            item.quantity + 1 <= 10 &&
              messageApi.open({
                type: 'success',
                content: `${product.title} (${product.size.size}) ${
                  item.quantity + 1
                }x in cart!`,
              });
            return {
              ...item,
              quantity: item.quantity <= 9 ? item.quantity + 1 : item.quantity,
              order: uuidv4(),
              total: item.price,
            };
          } else {
            return {
              ...item,
              total: item.price,
              order: uuidv4(),
            };
          }
        });
      } else {
        messageApi.open({
          type: 'success',
          content: `${product.title} (${product.size.size}) added to cart!`,
        });
        return [
          ...prevItems,
          {
            ...product,
            total: product.price,
            order: uuidv4(),
            quantity: 1,
          },
        ];
      }
    });
  };

  const calcPrice = (price, quantity) => {
    return price * quantity;
  };
  const increasePizza = (order) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.order === order
          ? {
              ...item,
              quantity: item.quantity + 1,
              total:
                item.quantity >= 2
                  ? calcPrice(item.price, item.quantity)
                  : item.price,
            }
          : item
      )
    );
  };
  const decreasePizza = (order) => {
    const existPizza = cart.find((pizza) => pizza.order === order);

    if (existPizza && existPizza.quantity >= 2) {
      setCart((prevItems) =>
        prevItems.map((item) =>
          item.order === order
            ? {
                ...item,
                quantity: item.quantity - 1,
                total:
                  item.quantity >= 2
                    ? calcPrice(item.price, item.quantity)
                    : item.price,
              }
            : item
        )
      );
    } else if (existPizza.quantity < 2) {
      setCart(
        cart.filter((item) => {
          return item.order !== order;
        })
      );
    }
  };

  const removePizza = (order) => {
    const filteredArr = cart.filter((pizza) => pizza.order !== order);
    setCart(filteredArr);
  };
  const value = {
    cart,
    setCart,
    addToCart,
    decreasePizza,
    increasePizza,
    removePizza,
  };
  return (
    <CartContext.Provider value={value}>
      {contextHolder}
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};

export default CartProvider;
