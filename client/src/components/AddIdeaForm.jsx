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
  const dispatch = useDispatch();
  const { selected, ideas } = useSelector(s => s.home);

  const [idea, setIdea] = useState('');
  const [notes, setNotes] = useState('');

  // could probably use some refinement--posts to API and then updates state by issuing a get request immediately afterward
  const handleSubmit = () => {
    axios.post('/API/ideas', {
      idea: idea,
      notes: notes,
      selected: selected
    })
    .then(() => {
      setIdea('');
      setNotes('');
      return dispatch(getIdeas(selected))
    })
  }

  return (
    <Form style={{width: '65%', margin: 'auto'}}>
      <Form.Group>
        <Form.Label>Idea</Form.Label>
        <Form.Control type='idea' placeholder='Some idea' value={idea}
          onChange={event => {setIdea(event.target.value)}} />
        <Form.Text className='text-muted'>
          Enter a gift idea for this person.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Notes</Form.Label>
        <Form.Control type='notes' placeholder='Some notes' value={notes}
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
