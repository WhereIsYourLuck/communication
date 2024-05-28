import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '@core/config/app-config.service';
import { Discussion } from '@core/models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DiscussionService {
  private readonly path = '/discussions';

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
    private router: Router,
    private authService: AuthService,
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

  createDiscussion(id: number): void {
    const discussionParams: any = {};
    discussionParams.user1_id = id;
    discussionParams.user2_id = this.authService.user.id;
    discussionParams.user1 = id;
    discussionParams.user2 = this.authService.user.id;

    console.log(discussionParams);

    this.http
      .post<Discussion[]>(this.appConfig.apiUrl + this.path, discussionParams)
      .subscribe(
        (response) => {
          console.log('Discussion created successfully:', response);
          window.location.reload();
        },
        (error) => {
          console.error('Error creating discussion:', error);
        },
      );
  }
}
