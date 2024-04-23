import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWidgetContainerComponent } from './calendar-widget-container.component';

describe('CalendarContainerComponent', () => {
  let component: CalendarWidgetContainerComponent;
  let fixture: ComponentFixture<CalendarWidgetContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarWidgetContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarWidgetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
