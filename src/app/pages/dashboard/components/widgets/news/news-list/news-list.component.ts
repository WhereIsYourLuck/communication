import { Component } from '@angular/core';
import {NewsElementComponent} from "../news-element/news-element.component";
import {News} from "@core/models";
import {NewsService} from "@core/services/news.service";

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [
    NewsElementComponent
  ],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})
export class NewsListComponent {
  public news: News[] = [];
  constructor(private newsService: NewsService) {
    newsService.getNews().subscribe(news => this.news = news);
  }
}
