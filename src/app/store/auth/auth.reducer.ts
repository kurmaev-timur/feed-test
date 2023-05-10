import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, ISession, logout } from './auth.actions';

export interface AuthState {
  session: ISession | null;
  loading: boolean;
  error: any;
}

export const initialState: AuthState = {
  session: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loginSuccess, (state, { session }) => {
    return {
      ...state,
      session,
      loading: false,
      error: null,
    };
  }),
  on(logout, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(logout, (state) => {
    return {
      ...state,
      loading: false,
      error: null,
    };
  })
);
