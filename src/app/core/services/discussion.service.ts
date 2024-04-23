import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '@core/config/app-config.service';
import { Discussion } from '@core/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiscussionService {
  private readonly path = '/discussions';

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
  ) {}

  /**
   * Gets all the discussion of a user
   */
  getUserDiscussions(): Observable<Discussion[]> {
    return this.http.get<Discussion[]>(this.appConfig.apiUrl + this.path);
  }

  /**
   * Gets a discussion with a specific id
   * @param discussionId the discussion id
   */
  getDiscussion(discussionId: number): Observable<Discussion> {
    return this.http.get<Discussion>(
      this.appConfig.apiUrl + this.path + `/${discussionId}`,
    );
  }
}
