/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, takeLatest, put } from 'redux-saga/effects';
import { api, history } from 'services';
import { toast } from 'react-toastify';
import {
  authenticationRequest,
  authenticationSuccess,
  authenticationError,
} from './actions';

export interface ISignUpRequest {
  payload: {
    email: string;
    password: string;
  };
}

export function* authenticationRequestSaga({ payload }: ISignUpRequest) {
  try {
    const response = yield api.post('/sessions', payload);
    yield put(authenticationSuccess(response.data));
    return history.push('/dashboard');
  } catch (responseWithError) {
    yield put(authenticationError());
    return toast(responseWithError?.response?.data?.error, {
      type: 'error',
    });
  }
}

export default all([
  takeLatest(authenticationRequest, authenticationRequestSaga),
]);
