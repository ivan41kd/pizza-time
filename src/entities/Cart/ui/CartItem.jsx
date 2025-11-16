import Button from '../../../shared/ui/Button/Button';
import { DeleteOutlined } from '@ant-design/icons';
import { formatCurrency } from '../../../shared/lib/FormatPrice';
import { useDispatch } from 'react-redux';
import { decreasePizza, increasePizza, removePizza } from '../redux/actions';

const CartItem = ({ order, img, title, price, size, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="rounded-lg p-4! border-2! border-gray-700! flex w-full">
      <div className="flex items-center gap-4 w-full justify-between">
        <div className="flex items-center gap-4 w-full justify-between">
          <div className="flex items-center gap-4">
            {img && <img src={img} className="size-56" />}
            <div className="flex flex-col">
              <p className="text-xl! font-semibold! dark:text-white text-green-950">
                {title}
              </p>
              <p className="text-lg! dark:text-white text-green-950">{size}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Button
              title={'+'}
              onClick={() => dispatch(increasePizza(order))}
              className={'p-0! size-10 flex items-center justify-center'}
              disabled={quantity >= 10}
            />
            <p className="text-xl dark:text-white text-green-950">{quantity}</p>
            <Button
              title={'-'}
              onClick={() => dispatch(decreasePizza(order))}
              className={'p-0! size-10 flex items-center justify-center'}
            />
          </div>
        </div>

        <p className="text-xl! text-green-500 font-semibold!">
          {formatCurrency(price * quantity)}
        </p>
        <Button
          title={<DeleteOutlined style={{ fontSize: '1.5rem' }} />}
          className={'flex! items-center p-2!'}
          onClick={() => dispatch(removePizza(order))}
        />
      </div>
    </div>
  );
};

export default CartItem;
