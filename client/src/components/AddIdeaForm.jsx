import React, { useState } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from 'react-redux';
import { getPeople, getIdeas } from './redux/actions.js';

const AddIdeaForm = () => {

  const { selected } = useSelector(s => s.home);

  const [idea, setIdea] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    axios.post('/API/ideas', {
      idea: idea,
      notes: notes,
      selected: selected
    })
    .then(() => {
      return useDispatch(getIdeas(selected));
    })
  }

  return (
    <Form style={{width: '65%', margin: 'auto'}}>
      <Form.Group>
        <Form.Label>Idea</Form.Label>
        <Form.Control type='idea' placeholder='Some idea'
          onChange={event => {setIdea(event.target.value)}} />
        <Form.Text className='text-muted'>
          Enter a gift idea for this person.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Notes</Form.Label>
        <Form.Control type='notes' placeholder='Some notes'
          onChange={event => {setNotes(event.target.value)}} />
        <Form.Text className='text-muted'>
          Enter any additional notes/thoughts for this gift idea.
        </Form.Text>
      </Form.Group>

      <Button onClick={handleSubmit}>Submit</Button>

    </Form>
    )
  }

  export default AddIdeaForm;
