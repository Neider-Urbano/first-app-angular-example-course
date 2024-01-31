import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../models/answer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  apiUrl: string = 'https://www.omdbapi.com/?apikey=4287ad07&s=avenger';

  constructor(private _http: HttpClient) {}

  getMovie(): Observable<Answer> {
    return this._http.get<Answer>(this.apiUrl);
  }
}
