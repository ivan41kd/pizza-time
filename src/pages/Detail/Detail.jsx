import { useParams } from 'react-router-dom';
import { usePizzaContext } from '../../providers/PizzaProvider';
import Container from '../../components/Container/Container';

const Detail = () => {
  const { data } = usePizzaContext();
  const { id } = useParams();

  const exist = data.find((item) => item.id == id);
  return (
    <Container>
      <div className="">
        {exist && (
          <>
            <p>{exist.title}</p>
          </>
        )}
      </div>
    </Container>
  );
};

export default Detail;
