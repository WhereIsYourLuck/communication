import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationFeedComponent } from './conversation-feed.component';

describe('DiscussionComponent', () => {
  let component: ConversationFeedComponent;
  let fixture: ComponentFixture<ConversationFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationFeedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConversationFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
