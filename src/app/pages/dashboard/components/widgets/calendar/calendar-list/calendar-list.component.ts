import { Component, Input } from '@angular/core';
import { CalendarEvent } from '@core/models/event.model';
import { EventCardComponent } from '@shared/components/calendar/event-card/event-card.component';

@Component({
  selector: 'app-calendar-list',
  standalone: true,
  imports: [EventCardComponent],
  templateUrl: './calendar-list.component.html',
})
export class CalendarListComponent {
  @Input() events!: CalendarEvent[] | null;
}
