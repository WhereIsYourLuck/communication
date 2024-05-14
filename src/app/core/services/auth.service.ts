import { Injectable } from '@angular/core';
import { User } from '@core/models';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '@core/config/app-config.service';
import { take, tap } from 'rxjs';
import { LoginResponse } from '@core/auth/models/login.response.model';
import { StorageService } from '@core/storage/storage.service';
import { UserService } from '@core/services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

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

  constructor(
    private http: HttpClient,
    private config: AppConfigService,
    private storage: StorageService,
    private user: UserService,
    private jwt: JwtHelperService,
  ) {}

  getAuthToken(): string {
    return this.storage.get('access_token') ?? '';
  }

  get authenticatedUser(): User {
    console.log(this.jwt.decodeToken(this.token));
    return this._user;
  }

  isAuthenticated(): boolean {
    return this.storage.get('access_token') !== null;
  }

  login(cred: { email: string; password: string }) {
    return this.http
      .post<LoginResponse>(this.config.authUrl + '/login', {
        email: cred.email,
        password: cred.password,
      })
      .pipe(
        take(1),
        tap((data: LoginResponse) => {
          this.storage.set('access_token', data.token);
        }),
      );
  }

  logout(): void {
    this.storage.clear();
  }
}
