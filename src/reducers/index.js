import {combineReducers} from 'redux';
import counterReducer from './rootReducer';
import appReducer from './AppReducer';

export default combineReducers({
  counter: counterReducer,
  app: appReducer,
});
