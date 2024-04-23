import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardComponent } from './event-card.component';

describe('EventCardComponent', () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;

    component.calendarEvent = {
      id: 1,
      title: 'Test event',
      description: 'lorem ipsum',
      startDate: new Date('2023-12-24'),
      endDate: new Date(),
    };

    fixture.detectChanges();
  });

  it('should not display ephemeris by default', () => {
    const eventCard: HTMLElement = fixture.nativeElement;
    expect(eventCard.querySelector('app-date-ephemeris')).toBeNull();
  });

  it('should display ephemeris when set to true', () => {
    component.ephemeris = true;
    fixture.detectChanges();

    const eventCard: HTMLElement = fixture.nativeElement;
    expect(eventCard.querySelector('app-date-ephemeris')).not.toBeNull();
  });

  it('should display the correct title', () => {
    const eventCard: HTMLElement = fixture.nativeElement;
    const title = eventCard.querySelector('mat-card-title')!;

    expect(title.textContent)
      .withContext('with the hours')
      .toContain(component.calendarEvent.startDate.getHours());
    expect(title.textContent)
      .withContext('with the minutes')
      .toContain(component.calendarEvent.startDate.getMinutes());
    expect(title.textContent)
      .withContext('with the event title')
      .toContain(component.calendarEvent.title);
  });

  it('should display the correct description', () => {
    const eventCard: HTMLElement = fixture.nativeElement;
    const description = eventCard.querySelector('mat-card-content')!;

    expect(description.textContent)
      .withContext('with the description')
      .toContain(component.calendarEvent.description);
  });
});
