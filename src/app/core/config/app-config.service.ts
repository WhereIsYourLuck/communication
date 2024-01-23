import { Injectable } from '@angular/core';
import { AppConfigModel } from '@core/config/app-config.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private appConfig!: AppConfigModel;

  constructor(private http: HttpClient) {}

  load() {
    return this.http.get<AppConfigModel>('/assets/config/config.json').pipe(
      map((value) => {
        this.appConfig = value;
      }),
    );
  }

  /*
  URL of the API
   */
  get apiUrl() {
    return this.appConfig.apiUrl;
  }

  /*
  Environment on which the app is running
   */
  get env() {
    return this.appConfig.env;
  }
}
