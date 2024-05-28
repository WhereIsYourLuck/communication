import { Component, OnInit } from '@angular/core';
import { NewsWidgetComponent } from '../news-widget/news-widget.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { News } from '@core/models';
import { NewsService } from '@core/services/news.service';

@Component({
  selector: 'app-news-widget-container',
  standalone: true,
  imports: [NewsWidgetComponent, AsyncPipe],
  template: `
    @if (news$ | async; as news) {
      <app-news-widget [newsList]="news" />
    } @else {
      Erreur lors de la récupération des actualités
    }
  `,
})
export class NewsWidgetContainerComponent implements OnInit {
  news$!: Observable<News[]>;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.news$ = this.newsService.getNews();
  }
}
