import { combineReducers } from 'redux';
import homeReducer from '../components/redux/reducer';

export default combineReducers({
  home: homeReducer
});