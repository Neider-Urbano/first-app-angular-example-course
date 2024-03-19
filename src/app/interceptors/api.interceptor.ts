import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../dog/loading.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method === 'GET') {
      console.log('Intercept Api Dog y Movie');
      this.loadingService.loadingShow();
      return next
        .handle(req)
        .pipe(finalize(() => this.loadingService.loadingHide()));
    } else {
      return next.handle(req);
    }
  }
}
