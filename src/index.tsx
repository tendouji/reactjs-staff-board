import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './helpers/rootStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// setup fake backend
import { configureMockBackend } from './helpers';
configureMockBackend();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
