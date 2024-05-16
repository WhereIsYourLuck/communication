import { Component } from '@angular/core';
import { CalendarWidgetContainerComponent } from './components/widgets/calendar/calendar-widget-container/calendar-widget-container.component';
import { ConversationWidgetContainerComponent } from './components/widgets/chat/conversation-widget-container/conversation-widget-container.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CalendarWidgetContainerComponent,
    ConversationWidgetContainerComponent,
    RouterLink,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
