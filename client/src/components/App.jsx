import React, {useState} from 'react';
import Header from './Header.jsx';

const App = () => {

  const [people, setPeople] = useState([]);
  const [selected, setSelected] = useState(people[0])

  return (
    <div>
      <Header people={people} selected={selected} />
    </div>
  )
}

export default App;