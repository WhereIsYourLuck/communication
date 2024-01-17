import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss',
})
export class ConversationComponent {
  @Input() id: number = 1;
  @Input() username: string = 'Mock User';
  @Input() lastMessage: string = 'Mock last message';
  @Input() messageDate: string = '20/12/2023';
  @Input() messagesNotSeen: number = 0;
}
