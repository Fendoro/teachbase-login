import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth';
import lngReducer from './language';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  language: lngReducer,
});

export default rootReducer;
