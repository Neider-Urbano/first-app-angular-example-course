import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class JwtApiInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let req = request;

    if (req.method === 'POST') {
      console.log('Interceptor Login');

      return next.handle(req).pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            this.router.navigateByUrl('/Projects');
          }

          return throwError(err);
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
