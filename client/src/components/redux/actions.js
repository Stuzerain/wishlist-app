import axios from 'axios';
import 'regenerator-runtime/runtime.js';

export const GET_PEOPLE = 'home:GET_PEOPLE';
export const SELECT_PERSON = 'home:SELECT_PERSON';

export const getPeople = () =>
  async dispatch => {
    try {
      const res = await axios.get('/API/people');
      dispatch({
        type: GET_PEOPLE,
        payload: res?.data,
      })
    } catch (error) {
      // TODO handle error
    }
  };

export const selectPerson = () =>
  async dispatch => {
    try {
      dispatch({
        type: SELECT_PERSON,
        payload: {name: 'tested'}
      })
    } catch (error) {
      // TODO handle error
    }
  };
