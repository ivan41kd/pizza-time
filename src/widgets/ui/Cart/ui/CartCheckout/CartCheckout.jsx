import { useCartContext } from '../../../../../providers/CartProvider';
import { calcTotal } from '../../../../../shared/lib/CalcTotal';
import { formatCurrency } from '../../../../../shared/lib/FormatPrice';
import Button from '../../../../../shared/ui/Button/Button';
import CartCheckoutItems from '../CartCheckoutItems/CartCheckoutItems';

const CartCheckout = () => {
  const { cart } = useCartContext();
  return (
    <div className="bg-red-500 w-md !p-4 flex flex-col rounded-lg text-white">
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-center w-full !border-b-1 !border-white">
          <p className="!text-3xl text-center !mb-2">Order summary</p>
        </div>
        <CartCheckoutItems />
        <div className="flex flex-col">
          <div className="flex gap-2">
            <p className="!text-base !mb-2">Total:</p>
            <p className="!text-base">{formatCurrency(calcTotal(cart))}</p>
          </div>
          <Button
            title={'Order'}
            className={'!bg-white !text-black hover:!bg-neutral-300'}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
