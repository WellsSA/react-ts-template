export interface IQuestion {
  title: string;
}

export interface IExam {
  title: string;
  id: string;
  form_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface IInitialState {
  isLoading: boolean;
  isLoadingCreate: boolean;
  rows: IExam[];
  selected: string | null;
  modalOpen: boolean;
  page: number;
  total_items: number;
  page_count: number;
}
