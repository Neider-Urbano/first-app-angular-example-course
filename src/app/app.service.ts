import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from './models/answer.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  apiUrl = 'https://www.omdbapi.com/?apikey=4287ad07&s=avenger';

  constructor(private _http: HttpClient) {}

  obtenerRespuesta() {
    return this._http.get<Answer>(this.apiUrl);
  }
}
