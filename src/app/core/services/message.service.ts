import { Injectable } from '@angular/core';
import { Message } from '@core/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from '@core/config/app-config.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private readonly path = (id: number) => `/discussions/${id}/messages`;

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
  ) {}

  /*addMessage(message: { content: string; sentBy: number }) {
    const newMessage: Message = {
      ...message,
      id: this.messages.length + 1,
      sentAt: new Date(),
    };
    this.messages.push(newMessage);
  }*/

  getMessagesByDiscussionId(discussionId: number): Observable<Message[]> {
    return this.http.get<Message[]>(
      this.appConfig.apiUrl + this.path(discussionId),
    );
  }

  postMessage(
    discussionId: number,
    message: Partial<Message>,
  ): Observable<Message[]> {
    console.log(this.appConfig.apiUrl + this.path(discussionId));
    return this.http.post<Message[]>(
      this.appConfig.apiUrl + this.path(discussionId),
      {
        ...message,
      },
    );
  }
}
