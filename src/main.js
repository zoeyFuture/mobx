import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Home from './routes/Home';
import store from './store';

ReactDOM.render(
  <Provider {...store}>
    <Home />
  </Provider>,
  document.querySelector('#app')
);