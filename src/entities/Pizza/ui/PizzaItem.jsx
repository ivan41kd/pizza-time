import { Select } from 'antd';
import Button from '../../../shared/ui/Button/Button';
import s from '@/widgets/ui/PizzaItems/ui/pizza.module.scss';
import styles from './pizza-select.module.scss';

import { formatCurrency } from '../../../shared/lib/FormatPrice';

import { useState } from 'react';
import { useCartContext } from '../../../providers/CartProvider';

const PizzaItem = ({ id, img, title, description, price, sizes }) => {
  const { addToCart } = useCartContext();
  const [pricePizza, setPricePizza] = useState(price);

  const [pizza, setPizza] = useState({
    id,
    img,
    title,
    price: sizes[0].price,
    size: {
      size: sizes[0].size,
      id: sizes[0].id,
    },
    quantity: 1,
  });

  const handleChange = ({ size, id, price }) => {
    setPricePizza(price);
    setPizza((prev) => ({
      ...prev,
      price: price,
      size: {
        size: size,
        id: id,
      },
    }));
  };

  return (
    <div className={s.pizza__item}>
      <div className={s.pizza__item_info}>
        {img && (
          <img
            className={`${s.pizza__img} drop-shadow-xl/50 dark:drop-shadow-stone-700`}
            src={img}
          />
        )}

        <p className={`${s.pizza__item_title} text-green-950 dark:text-white`}>
          {title}
        </p>
        <p
          className={`${s.pizza__item_description}  text-gray-950 dark:text-white`}
        >
          {description}
        </p>
      </div>
      <div className="flex flex-col">
        <p className={`${s.pizza__item_price} text-center !mb-4`}>
          {formatCurrency(pricePizza)}
        </p>
        <div className={s.pizza__item_options}>
          {sizes && (
            <Select
              className={styles.pizzaSelect}
              defaultValue={sizes[0].size}
              onChange={(e) => {
                const size = sizes.filter((size) => size.size === e);

                handleChange({
                  size: e,
                  price: size[0].price,
                  id: size[0].id,
                });
              }}
            >
              {sizes.map((size) => (
                <Select.Option value={size.size}></Select.Option>
              ))}
            </Select>
          )}
          <Button title={'Add to cart'} onClick={() => addToCart(pizza)} />
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
