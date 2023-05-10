import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MediaDTO } from 'src/app/feed/media';
import { AppState } from 'src/app/store/app.state';
import { loadMediaList } from 'src/app/store/feed/feed.actions';
import { selectMediaList } from 'src/app/store/feed/feed.selector';
import { logout } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  mediaList$: Observable<MediaDTO[]> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadMediaList());
    this.mediaList$ = this.store.select(selectMediaList);
  }

  logout() {
    this.store.dispatch(logout());
  }
}
