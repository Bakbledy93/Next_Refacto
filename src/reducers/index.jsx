import reducer from './user';
import reducerState from './state'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  user: reducer,
  state: reducerState
})

export default allReducers