import Container from '../../components/Container/Container';
import Cart from '@/widgets/ui/Cart/index';

const CartPage = () => {
  return (
    <>
      <section className="cart pb-20">
        <Container>
          <Cart />
        </Container>
      </section>
    </>
  );
};

export default CartPage;
