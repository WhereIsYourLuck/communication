import { booleanAttribute, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DateEphemerisComponent } from '@shared/components/calendar/date-ephemeris/date-ephemeris.component';
import { DatePipe } from '@angular/common';
import { Event } from '@core/models';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, DateEphemerisComponent, DatePipe],
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  @Input({ transform: booleanAttribute }) ephemeris: boolean = false;
  @Input() calendarEvent!: Event;
}
