import Button from '../../Button/Button';

import s from '../header.module.scss';
import { Badge } from 'antd';

import { Link } from 'react-router-dom';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const HeaderMenu = () => {
  const { cart } = useSelector((state) => state.cart);
  const { isDark } = useSelector((state) => state.mode);

  return (
    <div className={s.header__menu}>
      <Link to={'/search'} className="flex h-full items-center">
        <SearchOutlined
          className="transition delay-5 duration-300  size-5 ease-in-out"
          style={{ fontSize: '1.4rem', color: !isDark ? '#00240f' : 'white' }}
        />
      </Link>

      <div className="h-full flex items-center">
        <Link to={'/cart'} className="flex items-center">
          <Badge count={cart.length} className="w-full!" size="small">
            <ShoppingCartOutlined
              className="transition delay-5 duration-300 size-5 ease-in-out"
              style={{
                fontSize: '1.4rem',
                color: !isDark ? '#00240f' : 'white',
              }}
            />
          </Badge>
        </Link>
      </div>

      <Button title={'Sign in'} />
    </div>
  );
};
export default HeaderMenu;
