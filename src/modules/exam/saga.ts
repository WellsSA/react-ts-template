/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, put, takeLatest, delay } from 'redux-saga/effects';
import { retryApi } from 'services';
import { toast } from 'react-toastify';
import {
  examGetAllRequest,
  examGetAllError,
  examGetAllSuccess,
  examGetOneRequest,
  examGetOneError,
  examGetOneSuccess,
  examGetResponseRequest,
  examGetResponseError,
  examGetResponseSuccess,
} from './actions';

export function* examGetAllRequestSaga() {
  try {
    const response = yield retryApi(
      '/exams',
      {
        params: {
          page: 1,
          page_size: 1,
        },
      },
      2,
    );
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
    const response = yield retryApi(`/exams/${payload}`, {}, 2);
    return yield put(examGetOneSuccess({ selected: response.data }));
  } catch (responseWithError) {
    yield put(examGetOneError());
    return toast(responseWithError?.response?.data?.error, {
      type: 'error',
    });
  }
}

export function* examGetResponseRequestSaga({ payload }) {
  try {
    const response = yield retryApi(`/exams/${payload}/responses`, {}, 2);
    yield delay(1500);
    return yield put(
      examGetResponseSuccess({
        answers: response.data?.answers || [],
      }),
    );
  } catch (responseWithError) {
    yield put(examGetResponseError());
    return toast(responseWithError?.response?.data?.error, {
      type: 'error',
    });
  }
}

export default all([
  takeLatest(examGetAllRequest, examGetAllRequestSaga),
  takeLatest(examGetOneRequest, examGetOneRequestSaga),
  takeLatest(examGetResponseRequest, examGetResponseRequestSaga),
]);
