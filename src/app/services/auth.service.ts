import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface SessionResponse {
  data: {
    refresh_token: string;
    access_token: string;
    user_id: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly SESSION_STORAGE_KEY: string = 'session';

  constructor(private http: HttpClient) {}

  getSession(): Observable<SessionResponse> {
    const installationToken = '2kxlfAbJwFdAuh0';
    const body = {
      installation_token: installationToken,
      device: {
        platform: 'Web',
        platform_version: 'Web-1.0.0',
      },
      application: {
        app_name: 'Test WEB App',
        app_version: '1.0',
        app_build: 'development',
        app_type: 'watch_to_earn',
      },
    };

    return this.http
      .post<SessionResponse>('https://api.nutson.us/api/v3/auth/session', body)
      .pipe(
        tap((response) => {
          console.log(response);
          localStorage.setItem(
            this.SESSION_STORAGE_KEY,
            JSON.stringify(response.data)
          );
        }),
        catchError((error) => {
          return throwError(() => new Error(error));
        })
      );
  }

  deleteSessionToken(): void {
    localStorage.removeItem(this.SESSION_STORAGE_KEY);
  }
  getAccessToken(): string {
    const session = JSON.parse(
      localStorage.getItem(this.SESSION_STORAGE_KEY) || '{}'
    );
    return session?.access_token;
  }

  refreshAccessToken(): Observable<SessionResponse> {
    const refreshToken = JSON.parse(
      localStorage.getItem(this.SESSION_STORAGE_KEY) || '{}'
    ).refresh_token;

    const body = {
      refresh_token: refreshToken,
    };

    return this.http
      .post<SessionResponse>('https://api.nutson.us/api/v3/auth/refresh', body)
      .pipe(
        tap((response) => {
          localStorage.setItem(
            this.SESSION_STORAGE_KEY,
            JSON.stringify(response.data)
          );
        }),
        catchError((error) => {
          localStorage.removeItem(this.SESSION_STORAGE_KEY);
          return throwError(() => new Error(error));
        })
      );
  }
}
