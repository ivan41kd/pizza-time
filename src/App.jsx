import { useState } from 'react';
import { ConfigProvider } from 'antd';
import Main from './pages/Main';
import Header from './shared/ui/Header';
import PizzaProvider from './providers/PizzaProvider';
import { Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import NotFound from './pages/NotFound/NotFound';
import Detail from './pages/Detail/Detail';
import Page from './components/Page/Page';
import Cart from './pages/Cart/CartPage';
import Search from './pages/Search/Search';
import MessageProvider from './providers/MessageProvider';

const App = () => {
  const [navigation] = useState([
    {
      title: 'Home',
      link: './',
    },
    {
      title: 'Menu',
      link: './menu',
    },
    { title: 'Promo', link: './promo' },
  ]);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Fira Sans',
          colorTextHeading: 'inherit',
          colorTextDescription: 'inherit',
        },
      }}
    >
      <MessageProvider>
        <PizzaProvider>
          <Page>
            <Header navigation={navigation} />
            <Routes>
              <Route
                path={'/menu'}
                element={
                  <ProtectedRoute>
                    <Menu />
                  </ProtectedRoute>
                }
              />
              <Route path={'/search'} element={<Search />} />
              <Route
                path={'/cart'}
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route path={'/pizzas/:id'} element={<Detail />} />
              <Route path={'/'} element={<Main />} />
              <Route path={'*'} element={<NotFound />} />
            </Routes>
          </Page>
        </PizzaProvider>
      </MessageProvider>
    </ConfigProvider>
  );
};

export default App;
