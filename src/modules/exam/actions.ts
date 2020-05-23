import { createAction } from 'redux-actions';

import Constants from './constants';

export const examGetAllRequest = createAction(Constants.EXAM_GET_ALL_REQUEST);
export const examGetAllSuccess = createAction(Constants.EXAM_GET_ALL_SUCCESS);
export const examGetAllError = createAction(Constants.EXAM_GET_ALL_ERROR);

export const examGetOneRequest = createAction(Constants.EXAM_GET_ONE_REQUEST);
export const examGetOneSuccess = createAction(Constants.EXAM_GET_ONE_SUCCESS);
export const examGetOneError = createAction(Constants.EXAM_GET_ONE_ERROR);

export const examDeleteRequest = createAction(Constants.EXAM_DELETE_REQUEST);
export const examDeleteSuccess = createAction(Constants.EXAM_DELETE_SUCCESS);
export const examDeleteError = createAction(Constants.EXAM_DELETE_ERROR);

export const examCreateRequest = createAction(Constants.EXAM_CREATE_REQUEST);
export const examCreateSuccess = createAction(Constants.EXAM_CREATE_SUCCESS);
export const examCreateError = createAction(Constants.EXAM_CREATE_ERROR);

export const examGetResponseRequest = createAction(
  Constants.EXAM_GET_RESPONSES_REQUEST,
);
export const examGetResponseSuccess = createAction(
  Constants.EXAM_GET_RESPONSES_SUCCESS,
);
export const examGetResponseError = createAction(
  Constants.EXAM_GET_RESPONSES_ERROR,
);

export const examHandleModal = createAction(Constants.EXAM_HANDLE_MODAL);
export const examHandleNextPrevious = createAction(
  Constants.EXAM_HANDLE_NEXT_PREVIOUS,
);
