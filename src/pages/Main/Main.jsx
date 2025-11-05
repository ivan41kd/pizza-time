import Hero from './sections/Hero/Hero';
import Button from '../../shared/ui/Button/Button';

import Container from '../../components/Container/Container';

import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <main className="main">
        <Container>
          <Hero
            title={'Friday pizza!'}
            subtitle={'Time to enjoy our delicious pizza.'}
            button={
              <Link to={'/menu'}>
                <Button title={'Order now'} />
              </Link>
            }
          />
        </Container>
      </main>
    </>
  );
};

export default Main;
