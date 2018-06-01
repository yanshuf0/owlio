import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  resource = 'auth';
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(environment.apiRoot + this.resource + '/login', {
      username,
      password
    });
  }

  signup(username: string, password: string) {
    return this.http.post(environment.apiRoot + this.resource + '/signup', {
      username,
      password
    });
  }
}
