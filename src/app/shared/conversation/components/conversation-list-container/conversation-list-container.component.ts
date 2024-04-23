import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Discussion } from '@core/models';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { DiscussionService } from '@core/services/discussion.service';
import { ConversationListComponent } from '@shared/conversation/components/conversation-list/conversation-list.component';

@Component({
  selector: 'app-conversation-list-container',
  standalone: true,
  imports: [AsyncPipe, ConversationListComponent],
  providers: [DiscussionService],
  template: `
    @if (discussions$ | async; as discussions) {
      <app-conversation-list
        [conversationList]="discussions"
        (conversationItemClicked)="onConversationItemClicked($event)"
      />
    } @else {
      Erreur sur la récupération des discussions
    }
  `,
})
export class ConversationListContainerComponent implements OnInit {
  @Output() conversationItemClicked = new EventEmitter<Discussion>();

  discussions$!: Observable<Discussion[]>;

  constructor(private discussionService: DiscussionService) {}

  ngOnInit() {
    this.discussions$ = this.discussionService.getUserDiscussions();
  }

  onConversationItemClicked(discussion: Discussion) {
    this.conversationItemClicked.emit(discussion);
  }
}
