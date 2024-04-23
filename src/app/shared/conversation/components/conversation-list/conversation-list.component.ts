import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Discussion } from '@core/models';
import { ConversationListItemComponent } from '@shared/conversation/components/conversation-list-item/conversation-list-item.component';

@Component({
  selector: 'app-conversation-list',
  standalone: true,
  imports: [ConversationListItemComponent, CommonModule],
  templateUrl: './conversation-list.component.html',
  styleUrl: './conversation-list.component.scss',
})
export class ConversationListComponent {
  @Input() conversationList!: Array<Discussion>;
  @Output() conversationItemClicked = new EventEmitter<Discussion>();

  onConversationItemClicked(discussion: Discussion) {
    this.conversationItemClicked.emit(discussion);
  }
}
