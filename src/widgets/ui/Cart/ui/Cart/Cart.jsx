import CartItems from '../CartItems';
import CartCheckout from '../CartCheckout/CartCheckout';
import { useCartContext } from '../../../../../providers/CartProvider';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Result } from 'antd';
import { Link } from 'react-router-dom';
import Button from '../../../../../shared/ui/Button/Button';

const Cart = () => {
  const { cart } = useCartContext();
  return cart.length >= 1 ? (
    <div className="cart__wrapper flex justify-between gap-4">
      <CartItems />
      <CartCheckout />
    </div>
  ) : (
    <div className="flex flex-col items-center">
      <Result
        icon={<ExclamationCircleOutlined className="!text-red-500" />}
        title="Your cart is empty!"
        className="dark:text-white"
        extra={
          <Link to={'/menu'}>
            <Button title={'Back to menu'} />
          </Link>
        }
      />
    </div>
  );
};

export default Cart;
