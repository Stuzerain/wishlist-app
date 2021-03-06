import React, { useEffect } from 'react';

// importing bootstrap components -- importing each separately is better for
// runtime than ex. "import {x, y, z} from 'react-bootstrap'"
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { getPeople, selectPerson, toggleView, getIdeas } from './redux/actions.js';

const Header = ( ) => {
  const dispatch = useDispatch();
  const { people, selected } = useSelector(s => s.home);


  // dropdown menu for selecting person being viewed
  const peopleDropdown = people.map((person, index) => (
    <Dropdown.Item
      key={index}
      onClick={() => {
        dispatch(getIdeas(person))
        dispatch(toggleView(true))
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
          <Button
            onClick={() => {
              dispatch(toggleView(false))
            }}>
              Add a person
            </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Header;