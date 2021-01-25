import React, { useEffect } from 'react';

// importing bootstrap components -- importing each separately is better for
// runtime than ex. "import {x, y, z} from 'react-bootstrap'"
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { getPeople, selectPerson } from './redux/actions.js';

const Header = ( ) => {
  const dispatch = useDispatch();
  const { people, selected } = useSelector(s => s.home);

  useEffect(() => {
    dispatch(getPeople())

  }, []);

  // .then(() => {
  //   console.log(people)
  //   return dispatch(selectPerson(people[0]))});

  const peopleDropdown = people.map((person, index) => (
    <Dropdown.Item
      key={index}
      onClick={() => {
        dispatch(selectPerson(person))
        }}>
        {person.name}
    </Dropdown.Item>
  ));

  return (
    <Container>
      <Row style={{textAlign: 'center', fontWeight: 'bold'}}>
        <Col>
          Wishlist
        </Col>
      </Row>
      <Row style={{textAlign: 'center'}}>
        <Col>
          <DropdownButton title='People'>
            {peopleDropdown}
          </DropdownButton>
        </Col>
        <Col>
          {selected.name ? selected.name : 'undefined'}
        </Col>
      </Row>
    </Container>
  )
}

export default Header;