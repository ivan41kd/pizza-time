import { NavLink } from 'react-router-dom';
import s from '../header.module.scss';
const HeaderNav = ({ items = [] }) => {
  return (
    <nav className={s.header__nav}>
      {items &&
        items.map((item, index) => (
          <NavLink
            to={item.link}
            key={item.title + index}
            className={({ isActive }) =>
              isActive
                ? 'text-red-500'
                : 'dark:text-white text-green-950 hover:text-red-800 '
            }
          >
            <p className={s.header__menu_item}>{item.title}</p>
          </NavLink>
        ))}
    </nav>
  );
};
export default HeaderNav;
