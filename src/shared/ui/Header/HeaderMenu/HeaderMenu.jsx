import Button from '../../Button/Button';

import s from '../header.module.scss';
import { Badge } from 'antd';
import { useCartContext } from '../../../../providers/CartProvider';
import { Link } from 'react-router-dom';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useThemeContext } from '../../../../providers/ThemeProvider';

const HeaderMenu = () => {
  const { cart } = useCartContext();
  const { isDark } = useThemeContext();
  return (
    <div className={s.header__menu}>
      <Link to={'/search'} className="flex items-center">
        <SearchOutlined
          className="transition delay-5 duration-300 ease-in-out"
          style={{ fontSize: '1.4rem', color: isDark ? '#00240f' : 'white' }}
        />
      </Link>

      <div className="h-full flex items-center">
        <Link to={'/cart'} className="flex items-center">
          <Badge count={cart.length} className="!w-full" size="small">
            <ShoppingCartOutlined
              className="transition delay-5 duration-300 ease-in-out"
              style={{
                fontSize: '1.4rem',
                color: isDark ? '#00240f' : 'white',
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
