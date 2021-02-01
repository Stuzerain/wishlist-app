import { GET_PEOPLE, SELECT_PERSON, TOGGLE_VIEW, GET_IDEAS, ADD_IDEA } from './actions';

const initialState = {
  people: [],
  selected: {},
  view: false,
  ideas: [],
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
    case GET_IDEAS:
      return {
        ...state,
        ideas: payload,
      }
    case ADD_IDEA:
      return {
        ...state,
        ideas: {...ideas, payload},
      }
    default:
      return state;
  }
}