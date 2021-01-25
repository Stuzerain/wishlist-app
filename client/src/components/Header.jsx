import React from 'react';

// importing bootstrap components -- importing each separately is better for
// runtime than ex. "import {x, y, z} from 'react-bootstrap'"
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = ( { people, selected } ) => {

  const peopleDropdown = people.map((person, index) => (
    <Dropdown.Item key={index}>{person.name}</Dropdown.Item>
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
          {selected.name}
        </Col>
      </Row>
    </Container>
  )
}

export default Header;