import React from 'react';
import axios from 'axios';
import IdeaBlock from './IdeaBlock.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux';
import { getPeople, toggleView } from './redux/actions.js';

const InfoBlock = () => {

  const dispatch = useDispatch();
  const { selected, ideas } = useSelector(s => s.home);

  const mapper = (input) =>
    input.map((item, index) =>
      <IdeaBlock item={item} key={index} />
    )

  const handleDelete = () => {
    axios.delete(`/API/people/${selected.peopleid}`)
      .then(() => dispatch(toggleView(false)))
      .then(() => dispatch(getPeople()))
  }

  return (
    <Container style={{textAlign: 'center'}}>
      <Row>
        <Col>Name: {selected.name}</Col>
        <Col>Relationship: {selected.relationship}</Col>
        <Col>
            <Button variant='danger' size='sm'
            onClick={handleDelete}>
              Delete
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>Click on an idea to view related notes</Col>
      </Row>
        { ideas ? mapper(ideas) : 'no ideas yet' }
    </Container>
  )
}

export default InfoBlock;