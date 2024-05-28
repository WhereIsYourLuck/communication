import { Component } from '@angular/core';
import { CalendarWidgetContainerComponent } from './components/widgets/calendar/calendar-widget-container/calendar-widget-container.component';
import { Router, RouterLink } from '@angular/router';
import { Discussion } from '@core/models';
import { EventService } from '@core/services/event.service';
import { ConversationListContainerComponent } from '@shared/conversation/components/conversation-list-container/conversation-list-container.component';
import { NewsWidgetContainerComponent } from './components/widgets/news/news-widget-container/news-widget-container.component';
import { NewsService } from '@core/services/news.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CalendarWidgetContainerComponent,
    ConversationListContainerComponent,
    NewsWidgetContainerComponent,
    RouterLink,
  ],
  providers: [EventService, NewsService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private router: Router) {}

  onConversationItemClicked(discussion: Discussion) {
    this.router.navigate([`chat/${discussion.id}`]);
  }
}
