import { TestBed } from '@angular/core/testing';

import { DiscussionService } from './discussion.service';
import { provideHttpClient } from '@angular/common/http';

describe('DiscussionService', () => {
  let service: DiscussionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscussionService, provideHttpClient],
    });
    service = TestBed.inject(DiscussionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
