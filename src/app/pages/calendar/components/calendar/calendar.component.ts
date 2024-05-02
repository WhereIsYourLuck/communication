import { Component, NgModule } from "@angular/core";
import { FullCalendarModule } from "@fullcalendar/angular";
import { CommonModule } from "@angular/common";
import { CalendarOptions } from "@fullcalendar/core";
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventsService } from "@core/services/events.service";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ FullCalendarModule, CommonModule, HttpClientModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins:[timeGridPlugin],
    //dateClick: this.handleDateClick.bind(this),
    events: []
  };

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventsService.getEvents().subscribe({
      next: (events) => {
        this.calendarOptions.events = events; // Update the events
      },
      error: (err) => console.error('Failed to load events', err)
    });
  }
  handleDateClick(arg: any) {
    alert('Date clicked: ' + arg.dateStr);
  }
}

