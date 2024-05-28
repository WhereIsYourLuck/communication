import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '@core/config/app-config.service';
import { User } from '@core/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly path = '/users';

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
  ) {}

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.appConfig.apiUrl + this.path + '/' + id);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.appConfig.apiUrl + this.path);
  }
}
