import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

import { News } from '@core/models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, DatePipe, RouterLink],
  templateUrl: './news-card.component.html',
})
export class NewsCardComponent {
  @Input() news!: News;
  @Input() fullSize?: boolean = false;
}
