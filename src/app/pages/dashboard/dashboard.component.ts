import { Component, OnInit } from '@angular/core';
import { CalendarWidgetContainerComponent } from './components/widgets/calendar/calendar-widget-container/calendar-widget-container.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Discussion } from '@core/models';
import { EventService } from '@core/services/event.service';
import { ConversationListContainerComponent } from '@shared/conversation/components/conversation-list-container/conversation-list-container.component';
import { NewsWidgetContainerComponent } from './components/widgets/news/news-widget-container/news-widget-container.component';
import { NewsService } from '@core/services/news.service';
import { DataServiceService } from 'app/services/data-service.service';

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
export class DashboardComponent implements OnInit 
{
  email: string | null = '';
  pwd: string | null = '';

  constructor(private router: Router, private route : ActivatedRoute, private data : DataServiceService) {}


  ngOnInit(): void {
    this.pwd = this.route.snapshot.queryParamMap.get('pwd');
    this.email = this.route.snapshot.queryParamMap.get('email');

    if(this.email != null){
      this.data.setData('email', this.email);
    }

    if(this.pwd != null){
      this.data.setData('pwd', this.pwd);
    }

    const em = this.data.getData('email');
    const pw = this.data.getData('pwd');

    if(em == null || pw == null) {
      window.location.href = 'http://localhost:4200/parent';
    } else {
      this.router.navigate(['/'])
    }
  }

  onConversationItemClicked(discussion: Discussion) {
    this.router.navigate([`chat/${discussion.id}`]);
  }
}
