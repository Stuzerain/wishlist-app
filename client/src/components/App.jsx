import React, { useEffect } from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { getPeople, selectPerson } from './redux/actions.js';

const App = () => {
  const dispatch = useDispatch();

  // dispatch people state before any components load
  useEffect(() => {
    dispatch(getPeople())
  }, []);

  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

export default App;