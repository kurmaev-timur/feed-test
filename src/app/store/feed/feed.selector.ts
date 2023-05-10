import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { MediaDTO } from 'src/app/feed/media';
import { FeedState } from './feed.reducer';

export const selectFeature = (state: AppState) => state.feed;

export const selectMediaList = createSelector(
  selectFeature,
  (state: FeedState) => state.mediaList
);
