import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public isFetchingDataSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor() {}

  loadingShow(): void {
    this.isFetchingDataSubject.next(true);
  }

  loadingHide(): void {
    this.isFetchingDataSubject.next(false);
  }
}
