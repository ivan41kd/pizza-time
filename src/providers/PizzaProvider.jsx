/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext } from 'react';
import margaritaimg from '../widgets/ui/PizzaItems/shared/margarita.png';
import pepperoniimg from '../widgets/ui/PizzaItems/shared/pepperoni.png';
import cheeseimg from '../widgets/ui/PizzaItems/shared/cheese.png';
import { v4 as uuidv4 } from 'uuid';

const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: uuidv4(),
      img: cheeseimg,
      title: 'Cheese Lovers',
      description:
        'Combination of Alfredo sauce and two cheeses – Romano, and Parmesan.',
      sizes: [
        {
          size: 'Regular',
          id: 1,
          price: 20,
        },
        {
          size: 'Medium',
          id: 2,
          price: 10,
        },
        {
          size: 'Small',
          id: 3,
          price: 5,
        },
      ],
    },
    {
      id: uuidv4(),
      img: margaritaimg,
      title: 'Margherita',
      description:
        'Made with San Marzano tomatoes, mozzarella cheese, and fresh basil.',
      sizes: [
        {
          size: 'Regular',
          id: 1,
          price: 25,
        },
        {
          size: 'Medium',
          id: 2,
          price: 10,
        },
        {
          size: 'Small',
          id: 3,
          price: 3.3,
        },
      ],
    },
    {
      id: uuidv4(),
      img: pepperoniimg,
      title: 'Pepperoni',
      description: 'Pizza with homemade spicy beef sausage.',
      sizes: [
        {
          size: 'Regular',
          id: 1,
          price: 25,
        },
        {
          size: 'Medium',
          id: 2,
          price: 10,
        },
        {
          size: 'Small',
          id: 3,
          price: 2.3,
        },
      ],
    },
  ]);
  const [theme, setTheme] = useState('white');

  const value = {
    data,
    setData,
    theme,
    setTheme,
  };
  return (
    <PizzaContext.Provider value={value}>{children}</PizzaContext.Provider>
  );
};

export const usePizzaContext = () => {
  const context = useContext(PizzaContext);
  return context;
};

export default PizzaProvider;
