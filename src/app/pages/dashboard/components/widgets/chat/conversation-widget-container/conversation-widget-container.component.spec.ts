import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationWidgetContainerComponent } from './conversation-widget-container.component';

describe('ConversationWidgetContainerComponent', () => {
  let component: ConversationWidgetContainerComponent;
  let fixture: ComponentFixture<ConversationWidgetContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationWidgetContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConversationWidgetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
