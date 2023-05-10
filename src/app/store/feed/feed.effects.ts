import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import {
  loadMediaList,
  loadMediaListError,
  loadMediaListSuccess,
} from './feed.actions';
import { GetFeedService } from 'src/app/services/get-feed.service';

@Injectable()
export class FeedEffects {
  loadMediaList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMediaList),
      tap((u) => console.log(u)),
      switchMap(() =>
        this.getFeedService.getMediaList().pipe(
          map((mediaList) => loadMediaListSuccess({ mediaList })),
          catchError((error) => of(loadMediaListError({ errorMessage: error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private getFeedService: GetFeedService
  ) {}
}
