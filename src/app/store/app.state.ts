import { AuthState, authReducer } from './auth/auth.reducer';
import { FeedState, feedReducer } from './feed/feed.reducer';

export interface AppState {
  auth: AuthState;
  feed: FeedState;
}

export const initialState: AppState = {
  auth: {
    session: null,
    loading: false,
    error: null,
  },
  feed: {
    mediaList: [],
    loading: false,
    error: null,
  },
};

export const appReducer = {
  auth: authReducer,
  feed: feedReducer,
};
