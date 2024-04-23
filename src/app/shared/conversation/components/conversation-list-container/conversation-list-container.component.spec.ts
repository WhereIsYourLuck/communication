import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationListContainer } from './conversation-list-container.component';

describe('ConversationWidgetContainerComponent', () => {
  let component: ConversationListContainer;
  let fixture: ComponentFixture<ConversationListContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationListContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(ConversationListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
