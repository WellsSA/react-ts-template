export interface IUser {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  avatar: string | null;
}

export interface IInitialState {
  isLoading: boolean;
  user: IUser | null;
  token: string;
}
