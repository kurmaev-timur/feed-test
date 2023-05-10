import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login');
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ session: ISession }>()
);
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ errorMessage: string }>()
);

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');

export interface ISession {
  refresh_token: string;
  access_token: string;
  user_id: string;
}
