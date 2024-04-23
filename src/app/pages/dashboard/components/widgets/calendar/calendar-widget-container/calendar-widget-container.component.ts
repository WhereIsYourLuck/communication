import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '@core/models';
import { AsyncPipe } from '@angular/common';
import { EventService } from '@core/services/event.service';
import { CalendarWidgetComponent } from '../calendar-widget/calendar-widget.component';

@Component({
  selector: 'app-calendar-widget-container',
  standalone: true,
  imports: [AsyncPipe, CalendarWidgetComponent],
  template: `
    @if (events$ | async; as events) {
      <app-calendar-widget [eventList]="events" />
    } @else {
      Erreur sur la récupération des événements
    }
  `,
})
export class CalendarWidgetContainerComponent implements OnInit {
  events$!: Observable<Event[]>;

  constructor(private eventService: EventService) {}

  start = new Date(Date.now());
  end = new Date();

  ngOnInit() {
    this.events$ = this.eventService.getEvents(this.start, this.end);
  }
}
