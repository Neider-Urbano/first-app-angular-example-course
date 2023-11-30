import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from '../models/dog.model';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  apiUrl = 'https://api.thedogapi.com/v1/images/search';

  constructor(private _http: HttpClient) {}

  getDog() {
    return this._http.get<[Dog]>(this.apiUrl);
  }
}
