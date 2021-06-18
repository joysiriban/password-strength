import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment as env } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl: string = env.apiUrl;

  constructor(private _httpClient: HttpClient) {}

  private _formatErrors(error: any): Observable<any> {
    return throwError({
      ...error.error,
      statusCode: error.status,
      message: error.error.message || 'Network Error!'
    });
  }

  get(endpoint: string, parameters: any = {}, headers: any = {}): Observable<any> {
    return this._httpClient
      .get(
        `${this.baseUrl}${endpoint}`,
        {
          params: {
            ...parameters
          },
          headers
        }
      )
      .pipe(catchError(this._formatErrors));
  }

  post(endpoint: string, payload: any = {}, options: any = {}): Observable<any> {
    return this._httpClient
      .post(
        `${this.baseUrl}${endpoint}`,
        payload,
        options
      )
      .pipe(catchError(this._formatErrors));
  }

  put(endpoint: string, payload: any = {}, headers: any = {}): Observable<any> {
    return this._httpClient
      .put(
        `${this.baseUrl}${endpoint}`,
        payload,
        { headers }
      )
      .pipe(catchError(this._formatErrors));
  }

  delete(endpoint: string): Observable<any> {
    return this._httpClient
      .delete(`${this.baseUrl}${endpoint}`)
      .pipe(catchError(this._formatErrors));
  }
}
