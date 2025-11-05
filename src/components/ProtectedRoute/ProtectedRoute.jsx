import { Navigate } from 'react-router-dom';
import { usePizzaContext } from '../../providers/PizzaProvider';

const ProtectedRoute = ({ children }) => {
  const { data } = usePizzaContext();

  if (!data || !data.length) {
    return <Navigate to={'/'} />;
  }
  return children;
};

export default ProtectedRoute;
