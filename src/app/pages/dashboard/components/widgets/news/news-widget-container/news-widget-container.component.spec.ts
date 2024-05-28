import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsWidgetContainerComponent } from './news-widget-container.component';

describe('NewsWidgetContainerComponent', () => {
  let component: NewsWidgetContainerComponent;
  let fixture: ComponentFixture<NewsWidgetContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsWidgetContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsWidgetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
