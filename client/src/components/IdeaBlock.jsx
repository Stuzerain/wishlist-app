import React, { useState } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux';
import { getIdeas } from './redux/actions.js';

const IdeaBlock = ( { item } ) => {

  const dispatch = useDispatch();
  const { selected } = useSelector(s => s.home);
  const [viewingNotes, viewNotes] = useState(false);

  const handleDelete = () => {
    axios.delete(`/API/ideas/${item.ideaid}`)
      .then(() => dispatch(getIdeas(selected)))
  }

  return (
    <Container
      style={{borderBottom: '1px solid #007BFF', width: '50%', margin: '25px auto'}}>
      <Row onClick={() => viewNotes(!viewingNotes)}>
        <Col >
          Idea: {item.idea}
        </Col>
      </Row>
      { viewingNotes && <Row style={{borderTop: '1px solid lightgray'}}>
          <Col>
            Notes: {item.notes}
          </Col>
          <Col>
            <Button variant='danger' size='sm'
            onClick={handleDelete}>
              Delete
          </Button>
          </Col>
      </Row> }
    </Container>
  )
}

export default IdeaBlock;