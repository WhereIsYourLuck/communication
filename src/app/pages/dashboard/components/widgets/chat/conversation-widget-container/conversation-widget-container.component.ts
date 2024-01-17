import { Component } from '@angular/core';
import { ConversationListComponent } from '../../../../../chat/components/conversation-list/conversation-list.component';
import { Discussion } from '../../../../../../core/models';

@Component({
  selector: 'app-conversation-widget-container',
  standalone: true,
  imports: [ConversationListComponent],
  template: ` <app-conversation-list [conversationList]="conversationList" /> `,
})
export class ConversationWidgetContainerComponent {
  conversationList: Array<Discussion> = [
    {
      id: 1,
      username: 'Sophi Stonebanks',
      lastMessage: 'Proin risus. Praesent lectus.',
      messageDate: '13/06/2023',
      messagesNotSeen: 2,
    },
    {
      id: 2,
      username: 'Guillermo Windeatt',
      lastMessage: 'Etiam vel augue.',
      messageDate: '22/01/2023',
      messagesNotSeen: 0,
    },
    {
      id: 3,
      username: 'Toma Moriarty',
      lastMessage:
        'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      messageDate: '28/12/2022',
      messagesNotSeen: 8,
    },
    {
      id: 4,
      username: 'Johnathon Cescoti',
      lastMessage:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
      messageDate: '24/03/2023',
      messagesNotSeen: 0,
    },
    {
      id: 5,
      username: 'Neely Letcher',
      lastMessage:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
      messageDate: '25/04/2023',
      messagesNotSeen: 7,
    },
    {
      id: 6,
      username: 'Xylina Barkes',
      lastMessage:
        'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
      messageDate: '08/05/2023',
      messagesNotSeen: 11,
    },
  ];
}
