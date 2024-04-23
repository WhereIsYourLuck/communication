import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '@core/models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfigService } from '@core/config/app-config.service';
import { formatDate } from '@angular/common';

@Injectable()
export class EventService {
  private readonly path = '/events';

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
  ) {}

  getEvents(startsBefore?: Date, starsAfter?: Date): Observable<Event[]> {
    let params = new HttpParams();
    if (startsBefore) {
      params = params.append(
        'starts_before',
        formatDate(startsBefore, 'YYYY-MM-dd', 'EN'),
      );
    }
    if (starsAfter) {
      params = params.append(
        'starts_after',
        formatDate(starsAfter, 'YYYY-MM-dd', 'EN'),
      );
    }

    return this.http.get<Event[]>(this.appConfig.apiUrl + this.path, {
      params,
    });
  }
}
