import { Component, Input } from '@angular/core';
import { ConversationComponent } from '../conversation/conversation.component';
import { CommonModule } from '@angular/common';
import { Discussion } from '../../../../core/models';

@Component({
  selector: 'app-conversation-list',
  standalone: true,
  imports: [ConversationComponent, CommonModule],
  templateUrl: './conversation-list.component.html',
  styleUrl: './conversation-list.component.scss',
})
export class ConversationListComponent {
  @Input() conversationList!: Array<Discussion>;
}
