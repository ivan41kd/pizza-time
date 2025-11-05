import PizzaItem from '../../../../entities/Pizza/ui/PizzaItem';
import s from './pizza.module.scss';

const PizzaItems = ({ data }) => {
  return (
    <div className={s.pizza__items}>
      {data.map((item) => (
        <PizzaItem
          id={item.id}
          img={item.img}
          title={item.title}
          description={item.description}
          price={item.sizes[0].price}
          sizes={item.sizes}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default PizzaItems;
