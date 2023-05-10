import { createReducer, on } from '@ngrx/store';
import {
  loadMediaList,
  loadMediaListError,
  loadMediaListSuccess,
} from './feed.actions';
import { MediaDTO } from 'src/app/feed/media';

export interface FeedState {
  mediaList: MediaDTO[];
  loading: boolean;
  error: any;
}

export const initialState: FeedState = {
  mediaList: [],
  loading: false,
  error: null,
};

export const feedReducer = createReducer(
  initialState,
  on(loadMediaList, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadMediaListSuccess, (state, { mediaList }) => ({
    ...state,
    mediaList,
    loading: false,
    error: null,
  })),
  on(loadMediaListError, (state, { errorMessage }) => ({
    ...state,
    loading: false,
    errorMessage,
  }))
);
