export interface IQuestion {
  title: string;
}

export interface IExam {
  name: string;
  id: string;
  created_at: number;
  updated_at: number;
  expire_at: number;
  questions: IQuestion[];
}

export interface IInitialState {
  isLoading: boolean;
  rows: IExam[];
  selected: string | null;
  modalOpen: boolean;
}
