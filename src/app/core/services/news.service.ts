import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '@core/config/app-config.service';
import { Observable } from 'rxjs';
import { News } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
  ) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(
      this.appConfig.apiUrl + '/communications?type=news',
    );
  }
}
