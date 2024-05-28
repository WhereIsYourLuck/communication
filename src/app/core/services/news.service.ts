import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '@core/config/app-config.service';
import { News } from '@core/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private readonly path = '/communications';

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
  ) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.appConfig.apiUrl + this.path);
  }
}
