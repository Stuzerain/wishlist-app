import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSelector } from 'react-redux';

const InfoBlock = () => {

  const { selected } = useSelector(s => s.home);

  const mapper = (input) => {
    return input.ideas.map((idea, index) => {
      <Col key={index}>
        {idea}
      </Col>
    })
  }

  return (
    <Container style={{textAlign: 'center'}}>
      <Row>
        <Col>Name: {selected.name}</Col>
        <Col>Relationship: {selected.relationship}</Col>
      </Row>
      <Row>
        <Col>{ selected.ideas ? mapper(selected) : 'no ideas yet' }</Col>
      </Row>
    </Container>
  )
}

export default InfoBlock;