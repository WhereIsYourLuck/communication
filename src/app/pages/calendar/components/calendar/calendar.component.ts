import { Component, NgModule } from "@angular/core";
import { FullCalendarModule } from "@fullcalendar/angular";
import { CommonModule } from "@angular/common";
import { CalendarOptions } from "@fullcalendar/core";
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventsService } from "@core/services/events.service";
import { HttpClientModule } from '@angular/common/http';
import { EventService } from "@core/services/event.service";
import eventModel from "@core/models/event.model";
import { Observable } from "rxjs";


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
  events$!: Observable<eventModel[]>

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.events$ = this.eventService.getEvents();
    this.events$.subscribe({
      next: (events) => {
        events.forEach((value: eventModel):void => {
          const transformedEvent = {
            title: value.title,
            start: value.beginning,
            end: value.end,
            allDay: 'False',
            extendedProps: {
              description: value.description
            }
          };
          // Push each transformed event into the FullCalendar events array
          this.calendarOptions = {
            ...this.calendarOptions,
            events: [...(this.calendarOptions.events as any[]), transformedEvent]
          };
        })
      }
    });
  }
  handleDateClick(arg: any) {
    alert('Date clicked: ' + arg.dateStr);
  }
}

