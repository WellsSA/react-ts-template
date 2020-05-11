import { handleActions } from 'redux-actions';
import Constants from './constants';
import { IInitialState } from './types';

const initialState: IInitialState = {
  isLoading: false,
  user: null,
  token: null,
};

export default handleActions(
  {
    [Constants.AUTHENTICATION_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [Constants.AUTHENTICATION_SUCCESS]: (
      state: IInitialState,
      { payload },
    ) => ({
      ...state,
      isLoading: false,
      user: payload.user,
      token: payload.token,
    }),
    [Constants.AUTHENTICATION_ERROR]: state => ({
      ...state,
      isLoading: false,
    }),
  },
  initialState,
);
