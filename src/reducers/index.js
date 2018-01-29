import { combineReducers } from 'redux';
import strainsReducer from './strainsReducer';

const rootReducer = combineReducers({
  strains: strainsReducer
});

export default rootReducer;