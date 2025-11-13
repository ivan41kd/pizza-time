import { usePizzaContext } from '@/providers/PizzaProvider';
import Container from '../../components/Container/Container';
import PizzaItems from '@/widgets/ui/PizzaItems/ui/PizzaItems';

import s from './menu.module.scss';

const Menu = () => {
  const { data } = usePizzaContext();
  return (
    <section className={s.menu} id="menu">
      <Container>
        <div className={s.menu__wrapper}>
          <h2 className={`${s.menu__title} text-green-950 dark:text-white`}>
            Recommended menu
          </h2>
          <div className="pizza flex">
            <PizzaItems data={data} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Menu;
