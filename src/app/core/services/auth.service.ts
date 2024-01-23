import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //TODO : replace me with the real value
  private token: string = 'replace-me';

  constructor() {}

  getAuthToken(): string {
    return this.token;
  }
}
