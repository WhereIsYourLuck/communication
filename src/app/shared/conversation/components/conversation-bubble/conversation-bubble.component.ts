import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Message } from '@core/models';

@Component({
  selector: 'app-conversation-bubble',
  standalone: true,
  imports: [DatePipe, MatSidenavModule],
  templateUrl: './conversation-bubble.component.html',
  styleUrl: './conversation-bubble.component.scss',
})
export class ConversationBubbleComponent {
  @Input() message!: Message;
  @Input() isUserMessage!: boolean;
  @Input() position!: string;
  @Input() style!: string;
}
