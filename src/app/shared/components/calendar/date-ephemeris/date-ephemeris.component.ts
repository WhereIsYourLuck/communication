import { Component, Input } from '@angular/core';
import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-date-ephemeris',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe],
  templateUrl: './date-ephemeris.component.html',
  styleUrl: './date-ephemeris.component.scss',
})
export class DateEphemerisComponent {
  @Input() date!: string;
}
