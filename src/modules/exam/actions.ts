import { createAction } from 'redux-actions';

import Constants from './constants';

export const examGetAllRequest = createAction(Constants.EXAM_GET_ALL_REQUEST);
export const examGetAllSuccess = createAction(Constants.EXAM_GET_ALL_SUCCESS);
export const examGetAllError = createAction(Constants.EXAM_GET_ALL_ERROR);
