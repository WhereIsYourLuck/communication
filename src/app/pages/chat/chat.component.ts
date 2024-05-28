import { Component, OnInit } from '@angular/core';
import { ProfilePreviewComponent } from '@shared/components/profile/profile-preview/profile-preview.component';
import { MessageInputComponent } from '@shared/components/inputs/message-input/message-input.component';
import { Discussion, Message, User } from '@core/models';
import { ConversationFeedComponent } from '@shared/conversation/components/conversation-feed/conversation-feed.component';
import { ConversationListContainerComponent } from '@shared/conversation/components/conversation-list-container/conversation-list-container.component';
import { map, Observable } from 'rxjs';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@core/services/user.service';
import { MessageService } from '@core/services/message.service';
import { FormsModule, NgForm } from '@angular/forms';
import { DiscussionService } from '@core/services/discussion.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ConversationFeedComponent,
    ProfilePreviewComponent,
    MessageInputComponent,
    ConversationListContainerComponent,
    AsyncPipe,
    FormsModule,
    NgForOf,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  discussion$!: Observable<Discussion>;
  messages$!: Observable<Message[]>;
  user$!: Observable<User>;
  users: User[] = [];

  private discussionId!: number;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private discussionService: DiscussionService,
  ) {}

  ngOnInit() {
    this.discussion$ = this.activatedRoute.data.pipe(
      map(({ discussion }) => discussion),
    );
    this.messages$ = this.activatedRoute.data.pipe(
      map(({ messages }) => messages),
    );
    this.discussion$.subscribe((value) => {
      this.discussionId = value.id;
      this.user$ = this.userService.getUser(value.user2);
    });
    this.getUsers();
  }

  onConversationItemClicked(discussion: Discussion) {
    this.router.navigate(['chat', discussion.id]);
    this.ngOnInit();
  }

  addMessage(content: string) {
    this.messages$ = this.messageService.postMessage(this.discussionId, {
      content: content,
      sentBy: 1,
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  onSubmit(myform: NgForm) {
    console.log(myform.value.user);
    this.discussionService.createDiscussion(myform.value.user);
    this.discussionService.getUserDiscussions();
  }
}
