import { createAction, props } from '@ngrx/store';
import { MediaDTO } from 'src/app/feed/media';

export const loadMediaList = createAction('[Feed] Load Media List');

export const loadMediaListSuccess = createAction(
  '[Feed] Load Media List Success',
  props<{ mediaList: MediaDTO[] }>()
);

export const loadMediaListError = createAction(
  '[Feed] Load Media List Error',
  props<{ errorMessage: any }>()
);
