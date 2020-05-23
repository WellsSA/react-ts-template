/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, takeLatest, put } from 'redux-saga/effects';
import { api, history } from 'services';
import {
  authenticationRequest,
  authenticationSuccess,
  authenticationError,
  authenticationUpdateProfileRequest,
  authenticationUpdateProfileSuccess,
  authenticationUpdateProfileError,
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

export function* authenticationUpdateProfileRequestSaga({ payload }) {
  try {
    const response = yield api.put('/me', {
      name: payload?.name,
      email: payload?.email,
      old_password: payload?.oldPassword || '',
      password: payload?.password || '',
      password_confirmation: payload?.confirmPassword || '',
    });
    const { name, email } = response.data;
    return yield put(
      authenticationUpdateProfileSuccess({ user: { name, email } }),
    );
  } catch (responseWithError) {
    return yield put(authenticationUpdateProfileError());
  }
}

export default all([
  takeLatest(authenticationRequest, authenticationRequestSaga),
  takeLatest(
    authenticationUpdateProfileRequest,
    authenticationUpdateProfileRequestSaga,
  ),
]);
