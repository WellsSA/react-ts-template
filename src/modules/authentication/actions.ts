import { createAction } from 'redux-actions';
import Constants from './constants';

export const authenticationRequest = createAction(
  Constants.AUTHENTICATION_REQUEST,
);
export const authenticationSuccess = createAction(
  Constants.AUTHENTICATION_SUCCESS,
);
export const authenticationError = createAction(Constants.AUTHENTICATION_ERROR);

export const authenticationUpdateProfileRequest = createAction(
  Constants.AUTHENTICATION_UPDATE_PROFILE_REQUEST,
);
export const authenticationUpdateProfileSuccess = createAction(
  Constants.AUTHENTICATION_UPDATE_PROFILE_SUCCESS,
);
export const authenticationUpdateProfileError = createAction(
  Constants.AUTHENTICATION_UPDATE_PROFILE_ERROR,
);

export const authenticationLogoutRequest = createAction(
  Constants.AUTHENTICATION_LOGOUT_REQUEST,
);
