import { Component, NgModule } from "@angular/core";
import { FullCalendarModule } from "@fullcalendar/angular";
import { CommonModule } from "@angular/common";
import { CalendarOptions } from "@fullcalendar/core";
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ FullCalendarModule, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins:[timeGridPlugin],
    //dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'Anniversaire Simon', start: '2024-05-08T10:00:00', end: '2024-05-03T12:00:00' },
      { title: 'Journée portes ouvertes', start: '2024-05-04', allDay: true }    ]
  };

  handleDateClick(arg: any) {
    alert('Date clicked: ' + arg.dateStr);
  }
}
