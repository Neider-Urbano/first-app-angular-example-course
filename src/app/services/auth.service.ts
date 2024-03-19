import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData, TokenData } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(credentials: LoginData): Observable<TokenData> {
    const url = 'http://localhost:3000/login';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const token = this.http.post<TokenData>(url, credentials, {
      headers,
    });
    return token;
  }

  isAuthenticated(): boolean {
    const token: string = this.cookieService.get('token');
    if (token && token.length < 10) {
      return false;
    }
    return true;
  }
}
