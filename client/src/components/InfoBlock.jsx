import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSelector } from 'react-redux';

const InfoBlock = () => {

  const { selected } = useSelector(s => s.home);

  const ideas = selected.ideas.map((idea, index) => (
    <Col key={index}>
        {idea}
    </Col>
  ));

  return (
    <Container style={{textAlign: 'center'}}>
      <Row>
        <Col>Name: {selected.name}</Col>
      </Row>
      <Row>{ideas}</Row>
    </Container>
  )
}

export default InfoBlock;