import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ProfilePreviewComponent } from '../../profile/profile-preview/profile-preview.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ConversationFeedComponent } from '@shared/conversation/components/conversation-feed/conversation-feed.component'; // Assurez-vous d'utiliser le bon chemin

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    FormsModule,
    ConversationFeedComponent,
    ProfilePreviewComponent,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss',
})
export class MessageInputComponent {
  @Output() messageSent = new EventEmitter<string>();
  content: string = ''; // Initialisation de la propriété message

  onNewMessage() {
    this.messageSent.emit(this.content);
    this.content = '';
  }
}
