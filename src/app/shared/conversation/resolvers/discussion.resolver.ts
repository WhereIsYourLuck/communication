import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Discussion } from '@core/models';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { DiscussionService } from '@core/services/discussion.service';

export const discussionResolver: ResolveFn<Discussion> = (
  route: ActivatedRouteSnapshot,
): Observable<Discussion> => {
  return inject(DiscussionService).getDiscussion(route.params['id']);
};
