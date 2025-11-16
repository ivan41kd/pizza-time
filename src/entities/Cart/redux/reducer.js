import { v4 as uuidv4 } from 'uuid';
import { calcPrice } from './actions';

const initialState = {
  cart: [],
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD': {
      const existingItem = state.cart.find(
        (item) =>
          item.title === action.payload.pizza.title &&
          item.size.size === action.payload.pizza.size.size
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (
              item.title === action.payload.pizza.title &&
              item.size.size === action.payload.pizza.size.size
            ) {
              return {
                ...item,
                quantity:
                  item.quantity <= 9 ? item.quantity + 1 : item.quantity,
              };
            } else {
              return {
                ...item,
              };
            }
          }),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.payload.pizza,
              total: action.payload.pizza.price,
              order: uuidv4(),
              quantity: 1,
            },
          ],
        };
      }
    }

    case 'INCREASE': {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.order === action.payload.pizza
            ? {
                ...item,
                quantity: item.quantity + 1,
                total:
                  item.quantity >= 2
                    ? calcPrice(item.price, item.quantity)
                    : item.price,
              }
            : item
        ),
      };
    }
    case 'DECREASE': {
      const existPizza = state.cart.find(
        (pizza) => pizza.order === action.payload.pizza
      );

      return {
        ...state,
        cart:
          existPizza && existPizza.quantity >= 2
            ? state.cart.map((item) => {
                return item.order === action.payload.pizza
                  ? {
                      ...item,
                      quantity: item.quantity - 1,
                      total:
                        item.quantity >= 2
                          ? calcPrice(item.price, item.quantity)
                          : item.price,
                    }
                  : item;
              })
            : state.cart.filter((item) => item.order !== action.payload.pizza),
      };
    }
    case 'DELETE': {
      return {
        ...state,
        cart: state.cart.filter((item) => item.order !== action.payload.pizza),
      };
    }
    default:
      return state;
  }
}
