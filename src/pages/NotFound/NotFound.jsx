import { Result } from 'antd';
import Button from '../../shared/ui/Button/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      className="dark:text-white"
      extra={
        <Link to={'/'}>
          <Button title={'Back Home'} />
        </Link>
      }
    />
  );
};

export default NotFound;
