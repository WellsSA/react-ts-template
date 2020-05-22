export interface IAnswer {
  title: string;
  text: string;
}

export interface IExam {
  title: string;
  id: string;
  form_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface IExamSelected {
  id: string;
  form_id: string;
  user_id: string;
  title: string;
  url: string;
  fields: {
    id: string;
    title: string;
    validations: {
      required: boolean;
    };
    type: 'long_text';
  }[];
}

export interface IInitialState {
  isLoading: boolean;
  isLoadingCreate: boolean;
  isLoadingResponse: boolean;
  rows: IExam[];
  answers: IAnswer[][];
  selected: IExamSelected | null;
  modalOpen: boolean;
  page: number;
  total_items: number;
  page_count: number;
}
