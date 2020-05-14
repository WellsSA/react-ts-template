import { handleActions } from 'redux-actions';
import Constants from './constants';
import { IInitialState } from './types';

const initialState: IInitialState = {
  isLoading: false,
  rows: [
    {
      created_at: new Date().getTime(),
      updated_at: new Date().getTime(),
      name: 'CCPBUA-3AN',
      id: 'randomid0',
      questions: [],
      expire_at: new Date().getTime(),
    },
    {
      created_at: new Date().getTime(),
      updated_at: new Date().getTime(),
      name: 'CCPBUA-1AN',
      id: 'randomid1',
      questions: [
        { title: 'Quem foi Turing?' },
        { title: 'O que é um HashTable?' },
      ],
      expire_at: new Date().getTime(),
    },
  ],
  selected: null,
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
    }),
    [Constants.EXAM_GET_ALL_ERROR]: state => ({
      ...state,
      isLoading: false,
    }),
  },
  initialState,
);
