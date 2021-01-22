import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// bootstrap requires this line in either src/index.jsx or App.jsx
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App />,
  document.getElementById("app")
);