import { createAction } from 'redux-actions';

import Constants from './constants';

export const examGetAllRequest = createAction(Constants.EXAM_GET_ALL_REQUEST);
export const examGetAllSuccess = createAction(Constants.EXAM_GET_ALL_SUCCESS);
export const examGetAllError = createAction(Constants.EXAM_GET_ALL_ERROR);

export const examCreateRequest = createAction(Constants.EXAM_CREATE_REQUEST);
export const examCreateSuccess = createAction(Constants.EXAM_CREATE_SUCCESS);
export const examCreateError = createAction(Constants.EXAM_CREATE_ERROR);

export const examHandleModal = createAction(Constants.EXAM_HANDLE_MODAL);
export const examHandleNextPrevious = createAction(
  Constants.EXAM_HANDLE_NEXT_PREVIOUS,
);
