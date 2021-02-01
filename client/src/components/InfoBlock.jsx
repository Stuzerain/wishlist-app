import React from 'react';
import IdeaBlock from './IdeaBlock.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSelector } from 'react-redux';

const InfoBlock = () => {

  const { selected, ideas } = useSelector(s => s.home);

  const mapper = (input) =>
    input.map((item, index) =>
      <IdeaBlock item={item} key={index} />
    )


  return (
    <Container style={{textAlign: 'center'}}>
      <Row>
        <Col>Name: {selected.name}</Col>
        <Col>Relationship: {selected.relationship}</Col>
      </Row>
        { ideas ? mapper(ideas) : 'no ideas yet' }
    </Container>
  )
}

export default InfoBlock;