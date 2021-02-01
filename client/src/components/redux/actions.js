import axios from 'axios';
import 'regenerator-runtime/runtime.js';

import { useSelector } from 'react-redux';

export const GET_PEOPLE = 'home:GET_PEOPLE';
export const SELECT_PERSON = 'home:SELECT_PERSON';
export const TOGGLE_VIEW = 'home:TOGGLE_VIEW'
export const GET_IDEAS = 'home:GET_IDEAS'

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

export const selectPerson = (input) =>
  async dispatch => {
    try {
      dispatch({
        type: SELECT_PERSON,
        payload: input
      })
    } catch (error) {
      // TODO handle error
    }
  };

  export const toggleView = (input) =>
    async dispatch => {
      try {
        dispatch({
          type: TOGGLE_VIEW,
          payload: input
        })
      } catch (error) {
        // TODO handle error
      }
    }

  export const getIdeas = (input) =>
    async dispatch => {
      try {
        const res = await axios.get(`/API/selected/${input.peopleid}`);
        dispatch({
          type: GET_IDEAS,
          payload: res?.data,
        })
      } catch (error) {
        // TODO handle error
      }
    };
