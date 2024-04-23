import { Injectable } from '@angular/core';
import { User } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //TODO : replace me with the real value
  private token: string = 'replace-me';
  private _user: User = {
    id: 1,
    username: 'user',
    email: 'user@gmail.com',
    type: 'STAFF',
    isAdmin: false,
  };

  constructor() {}

  getAuthToken(): string {
    return this.token;
  }

  get user(): User {
    return this._user;
  }
}
