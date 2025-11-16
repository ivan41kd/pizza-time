import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { HashRouter as Router } from 'react-router-dom';
import './shared/scss/index.scss';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
