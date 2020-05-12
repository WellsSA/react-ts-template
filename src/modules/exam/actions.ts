import { createAction } from 'redux-actions';

import Constants from './constants';

export const signUpRequest = createAction(Constants.SIGNUP_REQUEST);
export const signUpSuccess = createAction(Constants.SIGNUP_SUCCESS);
export const signUpError = createAction(Constants.SIGNUP_ERROR);
