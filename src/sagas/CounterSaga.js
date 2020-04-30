import {put, takeLatest, call} from 'redux-saga/effects';
import * as actions from '../constants/actionsTypes';
import {toast} from '../utils/Toast';

function* incrementTask({payload}) {
  if (payload.count > 0) {
    // success
    yield put({type: actions.INCREMENT.SUCCESS, payload});
  } else {
    // error
    yield call(toast, 'Invalid count');
  }
}

function* decrementTask({payload}) {
  if (payload.count > 0) {
    // success
    yield put({type: actions.DECREMENT.SUCCESS, payload});
  } else {
    // error
    yield call(toast, 'Invalid count');
  }
}
export default function* root() {
  console.log('root Counter');
  yield takeLatest(actions.INCREMENT.REQUEST, incrementTask);
  yield takeLatest(actions.DECREMENT.REQUEST, decrementTask);
}
