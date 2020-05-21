/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, put, takeLatest } from 'redux-saga/effects';
import { api } from 'services';
import { toast } from 'react-toastify';
import {
  examGetAllRequest,
  examGetAllError,
  examGetAllSuccess,
} from './actions';
import { IExam } from './types';

interface IGetAllExamsResponse {
  items: IExam[];
  total_items: number;
  page_count: number;
}

export function* examGetAllRequestSaga() {
  try {
    const response = yield api.get<IGetAllExamsResponse>('/exams', {
      params: {
        page: 1,
        page_size: 1,
      },
    });
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

export default all([takeLatest(examGetAllRequest, examGetAllRequestSaga)]);
