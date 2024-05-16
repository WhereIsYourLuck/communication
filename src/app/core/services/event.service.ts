import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '@core/models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfigService } from '@core/config/app-config.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly path = '/events';

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
    private router: Router,
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

  createEvent(
    start_date: Date,
    end_date: Date,
    title: string,
    description?: string,
  ): void {
    const eventParams: any = {};

    if (start_date) {
      eventParams.beginning = formatDate(start_date, 'YYYY-MM-dd', 'EN');
    }
    if (end_date) {
      eventParams.end = formatDate(end_date, 'YYYY-MM-dd', 'EN');
    }
    if (title) {
      eventParams.title = title;
    }
    if (description) {
      eventParams.description = description;
    }

    this.http
      .post<Event[]>(this.appConfig.apiUrl + this.path, eventParams)
      .subscribe(
        (response) => {
          console.log('Event created successfully:', response);
          this.router.navigate(['/calendar']);
        },
        (error) => {
          console.error('Error creating event:', error);
        },
      );
  }
}
