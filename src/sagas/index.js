import { put, takeEvery, all } from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* addAsync() {
  yield delay(300);
  yield put({
    type: 'ADD'
  });
}

export function* minusAsync() {
  yield delay(300);
  yield put({
    type: 'MINUS'
  });
}

export function* watchAddAsync() {
  yield takeEvery('ADD_ASYNC', addAsync);
}

export function* watchMinusAsync() {
  yield takeEvery('MINUS_ASYNC', minusAsync);
}

export default function* rootSaga() {
  yield all([watchAddAsync(), watchMinusAsync()]);
}
