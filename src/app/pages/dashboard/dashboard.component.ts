import { Component } from '@angular/core';
import { ConversationWidgetContainerComponent } from './components/widgets/chat/conversation-widget-container/conversation-widget-container.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ConversationWidgetContainerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
