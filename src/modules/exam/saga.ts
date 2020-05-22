/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, put, takeLatest, delay } from 'redux-saga/effects';
import { api } from 'services';
import { toast } from 'react-toastify';
import {
  examGetAllRequest,
  examGetAllError,
  examGetAllSuccess,
  examGetOneRequest,
  examGetOneError,
  examGetOneSuccess,
} from './actions';

export function* examGetAllRequestSaga() {
  try {
    const response = yield api.get('/exams', {
      params: {
        page: 1,
        page_size: 1,
      },
    });
    yield delay(1500);
    return yield put(
      examGetAllSuccess({
        rows: response.data?.items,
        page_count: response.data?.page_count,
        total_items: response.data?.total_items,
      }),
    );
  } catch (responseWithError) {
    yield put(examGetAllError());
    return toast(responseWithError?.response?.data?.error, {
      type: 'error',
    });
  }
}

export function* examGetOneRequestSaga({ payload }) {
  try {
    const response = yield api.get(`/exams/${payload}`);
    return yield put(examGetOneSuccess({ selected: response.data }));
  } catch (responseWithError) {
    yield put(examGetOneError());
    return toast(responseWithError?.response?.data?.error, {
      type: 'error',
    });
  }
}

export default all([
  takeLatest(examGetAllRequest, examGetAllRequestSaga),
  takeLatest(examGetOneRequest, examGetOneRequestSaga),
]);
