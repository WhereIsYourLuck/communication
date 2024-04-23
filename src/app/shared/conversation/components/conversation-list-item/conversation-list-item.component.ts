import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Discussion, User } from '@core/models';
import { UserService } from '@core/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conversation-list-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './conversation-list-item.component.html',
  styleUrl: './conversation-list-item.component.scss',
})
export class ConversationListItemComponent implements OnInit {
  public user?: Observable<User>;

  @Input({ required: true }) discussion!: Discussion;
  @Output() conversationItemClicked = new EventEmitter<Discussion>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser(this.discussion.user2);
  }
  onClickDiscussion() {
    this.conversationItemClicked.emit(this.discussion);
  }
}
