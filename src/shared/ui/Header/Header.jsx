import headerLogo from './assets/pizza-logo.svg';

import HeaderNav from './HeaderNav/HeaderNav';
import HeaderMenu from './HeaderMenu/HeaderMenu';

import s from './header.module.scss';
import Container from '../../../components/Container/Container';
import { useThemeContext } from '@/providers/ThemeProvider';

const Header = ({ navigation }) => {
  const { isDark } = useThemeContext();
  return (
    <header
      className={`${s.header} ${
        isDark ? 'bg-white' : 'bg-neutral-900'
      } transition delay-5 duration-300 ease-in-out`}
    >
      <Container>
        <div className={s.header__wrapper}>
          <a href="/">
            <div className={s.header__logo}>
              <img src={headerLogo} className="img size-16" />
              <p className="text-green-950 dark:text-white !font-semibold !text-2xl">
                Pizza Time
              </p>
            </div>
          </a>

          <div className={s.header__right}>
            <HeaderNav items={navigation} />
            <HeaderMenu />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
