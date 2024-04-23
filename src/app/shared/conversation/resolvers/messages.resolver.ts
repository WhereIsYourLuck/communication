import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Message } from '@core/models';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { MessageService } from '@core/services/message.service';

export const messagesResolver: ResolveFn<Message[]> = (
  route: ActivatedRouteSnapshot,
): Observable<Message[]> => {
  return inject(MessageService).getMessagesByDiscussionId(route.params['id']);
};
