import { Component } from '@angular/core';
import { CalendarWidgetContainerComponent } from './components/widgets/calendar/calendar-widget-container/calendar-widget-container.component';
import { ConversationWidgetContainerComponent } from './components/widgets/chat/conversation-widget-container/conversation-widget-container.component';
import {NewsListComponent} from "./components/widgets/news/news-list/news-list.component";
import {NewsElementComponent} from "./components/widgets/news/news-element/news-element.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CalendarWidgetContainerComponent,
    ConversationWidgetContainerComponent,
    NewsListComponent,
    NewsElementComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
