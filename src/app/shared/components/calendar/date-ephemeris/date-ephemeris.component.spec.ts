import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateEphemerisComponent } from './date-ephemeris.component';

describe('DateEphemerisComponent', () => {
  let component: DateEphemerisComponent;
  let fixture: ComponentFixture<DateEphemerisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateEphemerisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DateEphemerisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
