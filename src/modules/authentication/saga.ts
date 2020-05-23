/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, takeLatest, put } from 'redux-saga/effects';
import { api, history } from 'services';
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
    return yield put(authenticationError());
  }
}

export default all([
  takeLatest(authenticationRequest, authenticationRequestSaga),
]);
