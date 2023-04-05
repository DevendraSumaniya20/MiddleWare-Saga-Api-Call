import axios from 'axios';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {getFail, getFetch, getSuccess} from './ApiSlice';

function* workGetFetch() {
  try {
    const response = yield call(() =>
      axios.get('https://fakestoreapi.com/products'),
    );

    yield put(getSuccess(response.data));
  } catch (error) {
    yield put(getFail(error.message));
  }
}

function* ApiSaga() {
  yield takeEvery('Api/getSuccess', workGetFetch);
}

export default ApiSaga;
