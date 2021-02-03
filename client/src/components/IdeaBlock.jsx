import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const IdeaBlock = ( { item } ) => {

  const [viewingNotes, viewNotes] = useState(false);

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
            <Button variant='danger' size='sm'>Delete</Button>
          </Col>
      </Row> }
    </Container>
  )
}

export default IdeaBlock;