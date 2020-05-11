import { handleActions } from 'redux-actions';
import Constants from './constants';
import { IInitialState } from './types';

const initialState: IInitialState = {
  isLoading: false,
};

export default handleActions(
  {
    [Constants.SIGNUP_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [Constants.SIGNUP_SUCCESS]: state => ({
      ...state,
      isLoading: false,
    }),
    [Constants.SIGNUP_ERROR]: state => ({
      ...state,
      isLoading: false,
    }),
  },
  initialState,
);
