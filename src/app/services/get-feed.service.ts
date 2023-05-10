import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MediaDTO, MediaListDTO } from '../feed/media';

@Injectable({
  providedIn: 'root',
})
export class GetFeedService {
  private readonly API_URL =
    'https://api.nutson.us/api/v2/media/feed/recommended';

  constructor(private http: HttpClient) {}

  getMediaList(): Observable<MediaDTO[]> {
    return this.http
      .get<MediaListDTO>(this.API_URL)
      .pipe(map((response: MediaListDTO) => response.data.media));
  }
}
