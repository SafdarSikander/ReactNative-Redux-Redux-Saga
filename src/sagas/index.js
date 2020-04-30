import {all} from 'redux-saga/effects';
import counter from './CounterSaga';
// combine sagas
export default function* root() {
  console.log('root saga');
  yield all([counter()]);
}
