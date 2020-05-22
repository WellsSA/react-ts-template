/* eslint-disable no-nested-ternary */
import { handleActions } from 'redux-actions';
import Constants from './constants';
import { IInitialState } from './types';

const initialState: IInitialState = {
  isLoading: false,
  isLoadingCreate: false,
  selected: null,
  modalOpen: false,
  rows: [],
  page: 1,
  total_items: 0,
  page_count: 0,
};

export default handleActions(
  {
    [Constants.EXAM_GET_ALL_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [Constants.EXAM_GET_ALL_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      rows: payload.rows,
      total_items: payload.total_items,
      page_count: payload.page_count,
    }),
    [Constants.EXAM_GET_ALL_ERROR]: state => ({
      ...state,
      isLoading: false,
    }),
    [Constants.EXAM_GET_ONE_REQUEST]: state => ({
      ...state,
      isLoading: true,
      selected: null,
    }),
    [Constants.EXAM_GET_ONE_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      selected: payload.selected,
    }),
    [Constants.EXAM_GET_ONE_ERROR]: state => ({
      ...state,
      isLoading: false,
    }),
    [Constants.EXAM_CREATE_REQUEST]: state => ({
      ...state,
      isLoadingCreate: true,
    }),
    [Constants.EXAM_CREATE_SUCCESS]: state => ({
      ...state,
      isLoadingCreate: false,
    }),
    [Constants.EXAM_CREATE_ERROR]: state => ({
      ...state,
      isLoadingCreate: false,
    }),
    [Constants.EXAM_HANDLE_MODAL]: (state, { payload }) => ({
      ...state,
      modalOpen: payload.modalOpen,
    }),
    [Constants.EXAM_HANDLE_NEXT_PREVIOUS]: (
      state: IInitialState,
      { payload },
    ) => {
      const nextPage = state.page + payload.page;
      return {
        ...state,
        page:
          nextPage < 0
            ? 1
            : nextPage >= state.page_count
            ? state.page_count
            : nextPage,
      };
    },
  },
  initialState,
);
