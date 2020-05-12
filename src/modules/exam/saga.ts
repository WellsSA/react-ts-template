/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, takeLatest, put } from 'redux-saga/effects';
import { api, history } from 'services';
import { toast } from 'react-toastify';
import { signUpRequest, signUpSuccess, signUpError } from './actions';

export interface ISignUpRequest {
  payload: {
    name: string;
    email: string;
    password: string;
  };
}

export function* signUpRequestSaga({ payload }: ISignUpRequest) {
  try {
    const response = yield api.post('/users', payload);

    toast(`Thanks for your sign up ${response?.data?.user?.name}`, {
      type: 'success',
    });
    yield put(signUpSuccess());
    return history.push('/');
  } catch (responseWithError) {
    yield put(signUpError());
    return toast(responseWithError?.response?.data?.error, {
      type: 'error',
    });
  }
}

export default all([takeLatest(signUpRequest, signUpRequestSaga)]);
