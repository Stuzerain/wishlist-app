import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSelector } from 'react-redux';

const IdeaBlock = ( { item } ) => {

  return (
      <Row >
        <Col >
          {item.idea}
        </Col>
      </Row>
  )
}

export default IdeaBlock;