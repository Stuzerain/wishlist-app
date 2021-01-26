import { GET_PEOPLE, SELECT_PERSON } from './actions';

const initialState = {
  people: [],
  selected: {}
};

export default function reducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_PEOPLE:
      return {
        ...state,
        people: payload,
      };
    case SELECT_PERSON:
      return {
        ...state,
        selected: payload,
      };
      default:
        return state;
  }
}