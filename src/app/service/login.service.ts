import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://172.16.10.16:8080/api/v1/auth/login';
  private registerUrl = 'http://172.16.10.16:8080/api/v1/auth/register';

  constructor(private http: HttpClient) { }

  // Method for login
  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials).pipe(
      catchError(this.handleError)
    );
  }

  // Method for register
  register(userDetails: { name: string, email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.registerUrl, userDetails).pipe(
      catchError(this.handleError)
    );
  }

  // Private error handler
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw(error || 'Something went wrong');
  }
}
