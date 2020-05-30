/* eslint-disable no-nested-ternary */
import { handleActions, Action } from 'redux-actions';
import Constants from './constants';
import { IInitialState } from './types';

const initialState: IInitialState = {
  selected: null,
  rows: [],
  answers: [],
  page: 1,
  total_items: 0,
  page_count: 0,
  isLoading: false,
  isLoadingCreate: false,
  isLoadingResponse: false,
  modalOpen: false,
};

export default handleActions(
  {
    [Constants.EXAM_GET_ALL_REQUEST]: (state: IInitialState) => ({
      ...state,
      isLoading: true,
    }),
    [Constants.EXAM_GET_ALL_SUCCESS]: (
      state: IInitialState,
      { payload }: Action<IInitialState>,
    ) => ({
      ...state,
      isLoading: false,
      rows: payload.rows,
      total_items: payload.total_items,
      page_count: payload.page_count,
    }),
    [Constants.EXAM_GET_ALL_ERROR]: (state: IInitialState) => ({
      ...state,
      isLoading: false,
    }),
    [Constants.EXAM_GET_ONE_REQUEST]: (state: IInitialState) => ({
      ...state,
      isLoading: true,
      selected: null,
    }),
    [Constants.EXAM_GET_ONE_SUCCESS]: (
      state: IInitialState,
      { payload }: Action<IInitialState>,
    ) => ({
      ...state,
      isLoading: false,
      selected: payload.selected,
    }),
    [Constants.EXAM_GET_ONE_ERROR]: (state: IInitialState) => ({
      ...state,
      isLoading: false,
    }),
    [Constants.EXAM_DELETE_REQUEST]: (state: IInitialState) => ({
      ...state,
      isLoading: true,
    }),
    [Constants.EXAM_DELETE_SUCCESS]: (
      state: IInitialState,
      { payload }: Action<IInitialState>,
    ) => {
      const deletedId = payload?.selected?.id || '';
      return {
        ...state,
        isLoading: false,
        rows: state.rows.filter(({ id }) => id !== deletedId),
      };
    },
    [Constants.EXAM_DELETE_ERROR]: (state: IInitialState) => ({
      ...state,
      isLoading: false,
    }),
    [Constants.EXAM_GET_RESPONSES_REQUEST]: (state: IInitialState) => ({
      ...state,
      isLoadingResponse: true,
      answers: [],
    }),
    [Constants.EXAM_GET_RESPONSES_SUCCESS]: (
      state: IInitialState,
      { payload }: Action<IInitialState>,
    ) => ({
      ...state,
      isLoadingResponse: false,
      answers: payload.answers,
    }),
    [Constants.EXAM_GET_RESPONSES_ERROR]: (state: IInitialState) => ({
      ...state,
      isLoadingResponse: false,
    }),
    [Constants.EXAM_CREATE_REQUEST]: (state: IInitialState) => ({
      ...state,
      isLoadingCreate: true,
    }),
    [Constants.EXAM_CREATE_SUCCESS]: (state: IInitialState) => ({
      ...state,
      isLoadingCreate: false,
      modalOpen: false,
    }),
    [Constants.EXAM_CREATE_ERROR]: (state: IInitialState) => ({
      ...state,
      isLoadingCreate: false,
    }),
    [Constants.EXAM_HANDLE_MODAL]: (
      state: IInitialState,
      { payload }: Action<IInitialState>,
    ) => ({
      ...state,
      modalOpen: payload.modalOpen,
    }),
    [Constants.EXAM_HANDLE_NEXT_PREVIOUS]: (
      state: IInitialState,
      { payload }: Action<IInitialState>,
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
