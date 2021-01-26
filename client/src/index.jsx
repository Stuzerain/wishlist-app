import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

//redux imports
import { Provider } from 'react-redux';
import store from './store.js';

// bootstrap requires this line in either src/index.jsx or App.jsx
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);