import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiGenericResponse } from '../models/apiGenericResponse.model';
import { RegisterPayload, SignInResponse } from '../models/user,models';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  urlpath = 'Auth';

  constructor(private readonly http: HttpClient) { }

  login(
    email: string,
    password: string
  ): Observable<ApiGenericResponse<SignInResponse>> {
    return this.http.post<ApiGenericResponse<SignInResponse>>(
      `${environment.apiUrl}${this.urlpath}/SignIn`,
      {
        email,
        password,
      }
    );
  }

  register(
    username: string,
    email: string,
    password: string
  ): Observable<ApiGenericResponse<SignInResponse>> {
    return this.http.post<ApiGenericResponse<SignInResponse>>(
      `${environment.apiUrl}${this.urlpath}/SignUp`,
      {
        Name: username,
        email,
        password,
      }
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
