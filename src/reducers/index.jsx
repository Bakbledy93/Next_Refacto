import reducer from './user';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  user: reducer,
})

export default allReducers