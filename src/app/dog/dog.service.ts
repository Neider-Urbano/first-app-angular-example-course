import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from '../models/dog.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  // isLoading$ = new Subject<boolean>();
  apiUrl: string = 'https://api.thedogapi.com/v1/images/search';

  constructor(private _http: HttpClient) {}

  getDog(): Observable<[Dog]> {
    return this._http.get<[Dog]>(this.apiUrl);
  }
}
