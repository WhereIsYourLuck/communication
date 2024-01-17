import { Component, Input, OnInit } from '@angular/core';
import { CalendarListComponent } from '../calendar-list/calendar-list.component';
import { CalendarEvent } from '@core/models/event.model';

@Component({
  selector: 'app-calendar-widget',
  standalone: true,
  imports: [CalendarListComponent],
  templateUrl: './calendar-widget.component.html',
})
export class CalendarWidgetComponent implements OnInit {
  @Input() eventList!: Array<CalendarEvent> | null;

  todayEvents: Array<CalendarEvent> = [];
  futureEvents: Array<CalendarEvent> = [];

  ngOnInit(): void {
    this.filterEvents();
  }

  filterEvents(): void {
    const today: Date = new Date(Date.now());
    this.eventList?.forEach((value: CalendarEvent): void => {
      if (
        value.startDate.getDay() == today.getDay() &&
        value.startDate.getMonth() == today.getMonth() &&
        value.startDate.getFullYear() == today.getFullYear()
      ) {
        this.todayEvents.push(value);
      } else if (value.startDate > today) {
        this.futureEvents.push(value);
      }
    });
  }
}
