import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CalendarComponent } from './pages/calendar/components/calendar/calendar.component';
import { FormNewEventComponent } from './pages/calendar/components/form-new-event/form-new-event.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'newevent', component: FormNewEventComponent },
  { path: 'calendar', component: CalendarComponent },
];
