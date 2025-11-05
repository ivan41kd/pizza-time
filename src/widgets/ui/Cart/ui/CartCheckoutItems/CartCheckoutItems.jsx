import { useCartContext } from '../../../../../providers/CartProvider';
import { formatCurrency } from '../../../../../shared/lib/FormatPrice';

const CartCheckoutItems = () => {
  const { cart } = useCartContext();
  return (
    <div className="flex flex-col gap-4">
      {cart.map((item, index) => {
        return (
          <div className="flex justify-between items-center" key={index}>
            <div className="flex items-baseline gap-2">
              <div className="flex flex-col">
                <p className="!text-xl">{item.title}</p>
                <p className="!text-base">{item.size.size}</p>
              </div>
              <div className="flex">
                <p className="!text-base">x{item.quantity}</p>
              </div>
            </div>
            <p>{formatCurrency(item.price * item.quantity)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CartCheckoutItems;
