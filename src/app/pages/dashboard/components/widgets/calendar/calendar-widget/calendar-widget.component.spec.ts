import { CalendarWidgetComponent } from './calendar-widget.component';
import { CalendarEvent } from '@core/models/event.model';

describe('CalendarWidgetComponent', () => {
  const startingTime = new Date('2023-12-24');

  const events: Array<CalendarEvent> = [
    {
      id: 1,
      title: 'Sortie à la ferme',
      description: 'lorem ipsum',
      startDate: new Date('2023-12-24'),
      endDate: new Date('2023-12-24'),
    },
    {
      id: 2,
      title: 'Sortie du lendemain',
      description: 'lorem',
      startDate: new Date('2023-12-25'),
      endDate: new Date('2023-12-26'),
    },
    {
      id: 3,
      title: 'Sortie de la veille',
      description: 'lorem',
      startDate: new Date('2023-12-23'),
      endDate: new Date('2023-12-24'),
    },
  ];

  let component: CalendarWidgetComponent;
  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(startingTime);

    component = new CalendarWidgetComponent();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should have empty lists at creation', () => {
    expect(component.todayEvents)
      .withContext('with today events empty at first')
      .toEqual([]);
    expect(component.futureEvents)
      .withContext('with future events empty at first')
      .toEqual([]);
  });

  it('should sort events starting today', () => {
    component.eventList = events;
    component.ngOnInit();

    expect(component.todayEvents)
      .withContext("with event 1 in today's list")
      .toContain(events[0]);
    expect(component.futureEvents)
      .withContext('with event 2 in future list')
      .toContain(events[1]);
  });

  it('should not have yesterday events', () => {
    component.eventList = events;
    component.ngOnInit();

    expect(component.todayEvents).not.toContain(events[2]);
    expect(component.futureEvents).not.toContain(events[2]);
  });
});
