import React, { useState } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddForm = () => {

  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');

  return (
    <Form style={{width: '65%', margin: 'auto'}}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type='name' placeholder='Some name'
          onChange={event => {setName(event.target.value)}} />
        <Form.Text className='text-muted'>
          Enter the name of a person you buy gifts for here.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Relationship</Form.Label>
        <Form.Control type='relationship' placeholder='Some relationship'
          onChange={event => {setRelationship(event.target.value)}} />
        <Form.Text className='text-muted'>
          Enter your relationship to this person.
        </Form.Text>
      </Form.Group>

      <Button>Submit</Button>

    </Form>
    )
  }

  export default AddForm;
  // <Container style={{textAlign: 'center'}}>
  //   <Row>
  //     <Col>AddForm</Col>
  //   </Row>
  // </Container>