import React from 'react';
import InfoBlock from './InfoBlock.jsx';
import AddForm from './AddForm.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

// redux imports
import { useSelector, useDispatch } from 'react-redux';

const Body = () => {

  const { selected, view } = useSelector(s => s.home);

  let loadSpin = () => (
    <Spinner animation='border' role='status' variant='primary' />
  )

  let renderedInfo = () => (
    <InfoBlock />
  )

  if (view) {
    return (
      <Container>
        <Row style={{textAlign: 'center'}}>
          <Col>
            {selected.name ? renderedInfo() : loadSpin()}
          </Col>
        </Row>
      </Container>
    )
  } else {
    return (
      <AddForm />
    )
  }
}

export default Body;