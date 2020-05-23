/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, takeLatest, put } from 'redux-saga/effects';
import { api, history } from 'services';
import { signUpRequest, signUpSuccess, signUpError } from './actions';

export interface ISignUpRequest {
  payload: {
    name: string;
    email: string;
    password: string;
  };
}

export function* signUpRequestSaga({
  payload: { name, email, password },
}: ISignUpRequest) {
  try {
    yield api.post('/users', { name, email, password });
    yield put(signUpSuccess());
    return history.push('/');
  } catch (responseWithError) {
    return yield put(signUpError());
  }
}

export default all([takeLatest(signUpRequest, signUpRequestSaga)]);
