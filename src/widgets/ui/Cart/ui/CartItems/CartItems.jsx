import { useCartContext } from '../../../../../providers/CartProvider';
import CartItem from '../../../../../entities/CartItem/ui';

const CartItems = () => {
  const { cart } = useCartContext();

  return (
    cart.length >= 1 && (
      <div className="cart__items w-full flex flex-col gap-2">
        {cart.map((item) => {
          return (
            <CartItem
              order={item.order}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              size={item.size.size}
              quantity={item.quantity}
              key={item.order}
            />
          );
        })}
      </div>
    )
  );
};

export default CartItems;
