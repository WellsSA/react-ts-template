import { history, retryApi, api } from 'services';
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, put, takeLatest, delay, select } from 'redux-saga/effects';

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
  examDeleteRequest,
  examDeleteError,
  examDeleteSuccess,
  examCreateRequest,
  examCreateSuccess,
  examCreateError,
} from './actions';

export function* examGetAllRequestSaga() {
  try {
    const {
      exam: { page },
    } = yield select();
    const response = yield retryApi(
      '/exams',
      {
        params: {
          page,
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
    return yield put(examGetAllError());
  }
}

export function* examGetOneRequestSaga({ payload }) {
  try {
    const response = yield retryApi(`/exams/${payload}`, {}, 2);
    return yield put(examGetOneSuccess({ selected: response.data }));
  } catch (responseWithError) {
    return yield put(examGetOneError());
  }
}

export function* examGetResponseRequestSaga({ payload }) {
  try {
    const response = yield retryApi(
      `/exams/${payload}/responses`,
      {
        params: {
          page_size: 1000,
        },
      },
      2,
    );
    yield delay(1500);
    return yield put(
      examGetResponseSuccess({
        answers: response.data?.items || [],
        answers_page_count: response.data?.page_count,
        answers_total_items: response.data?.total_items,
      }),
    );
  } catch (responseWithError) {
    return yield put(examGetResponseError());
  }
}

export function* examDeleteRequestSaga({ payload }) {
  try {
    yield api.delete(`/exams/${payload?.selected?.id}`);
    return yield put(
      examDeleteSuccess({ selected: { id: payload?.selected?.id } }),
    );
  } catch (responseWithError) {
    return yield put(examDeleteError());
  }
}

export function* examCreateRequestSaga({ payload: { name, questions } }) {
  try {
    const {
      data: { id },
    } = yield api.post(`/exams`, {
      title: name,
      fields: questions,
    });

    history.push(`/exam/${id}/view`);

    return yield put(examCreateSuccess());
  } catch (responseWithError) {
    return yield put(examCreateError());
  }
}

export default all([
  takeLatest(examGetAllRequest, examGetAllRequestSaga),
  takeLatest(examGetOneRequest, examGetOneRequestSaga),
  takeLatest(examGetResponseRequest, examGetResponseRequestSaga),
  takeLatest(examDeleteRequest, examDeleteRequestSaga),
  takeLatest(examCreateRequest, examCreateRequestSaga),
]);
