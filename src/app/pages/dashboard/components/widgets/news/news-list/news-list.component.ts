import { Component, Input } from '@angular/core';
import { News } from '@core/models';
import { NewsCardComponent } from '@shared/components/news/news-card/news-card.component';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [NewsCardComponent],
  templateUrl: './news-list.component.html',
})
export class NewsListComponent {
  @Input() news!: News[] | null;
}
