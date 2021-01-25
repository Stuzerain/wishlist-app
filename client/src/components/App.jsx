import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { getPeople, selectPerson } from './redux/actions.js';

const App = () => {

  const dispatch = useDispatch();
  const { people, selected } = useSelector(s => s.home);

  useEffect(() => {
    dispatch(getPeople());
    dispatch(selectPerson());
  }, []);

  return (
    <div>
      <Header people={people} selected={selected} />
    </div>
  )
}

export default App;