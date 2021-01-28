import { GET_PEOPLE, SELECT_PERSON, TOGGLE_VIEW } from './actions';

const initialState = {
  people: [],
  selected: {},
  view: false,
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
    case TOGGLE_VIEW:
      return {
        ...state,
        view: payload,
      }
    default:
      return state;
  }
}