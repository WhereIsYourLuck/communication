import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarEvent } from '@core/models/event.model';
import { AsyncPipe } from '@angular/common';
import { EventService } from '@core/services/event.service';
import { CalendarWidgetComponent } from '../calendar-widget/calendar-widget.component';

@Component({
  selector: 'app-calendar-widget-container',
  standalone: true,
  imports: [AsyncPipe, CalendarWidgetComponent],
  template: ` <app-calendar-widget [eventList]="events$ | async" /> `,
})
export class CalendarWidgetContainerComponent implements OnInit {
  events$!: Observable<CalendarEvent[]>;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    // TODO : replace me with the service call
    this.events$ = this.eventService.getEvents();
  }
}
