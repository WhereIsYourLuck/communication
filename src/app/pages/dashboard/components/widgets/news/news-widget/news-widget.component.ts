import { Component, Input, OnInit } from '@angular/core';
import { News } from '@core/models';
import { NewsListComponent } from '../news-list/news-list.component';

@Component({
  selector: 'app-news-widget',
  standalone: true,
  imports: [NewsListComponent],
  templateUrl: './news-widget.component.html',
})
export class NewsWidgetComponent implements OnInit {
  @Input() newsList!: Array<News>;

  ngOnInit(): void {
    // Tri des actualités pour afficher la plus récente en premier
    this.newsList.sort(
      (a, b) => new Date(b.sendDate).getTime() - new Date(a.sendDate).getTime(),
    );
  }
}
