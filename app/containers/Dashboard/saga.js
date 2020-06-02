// import { take, call, put, select } from 'redux-saga/effects';

import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_STATS, GET_STATS_SUCCESS } from './constants';

function* getData() {
  try {
    const { data } = yield call(axios.post, '/getStatsDashboard');
    yield put({ type: GET_STATS_SUCCESS, data });
  } catch (e) {
    console.log(e);
  }
}

export default function* dashboardSaga() {
  yield takeEvery(GET_STATS, getData);
}
