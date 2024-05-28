import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { News, User } from '@core/models';
import { NewsService } from '@core/services/news.service';
import { NewsCardComponent } from '@shared/components/news/news-card/news-card.component';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewsCardComponent, AsyncPipe],
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  @Input() user?: User = {
    id: 1,
    username: 'Samy',
    email: 'samy.djemili@utbm.fr',
    type: 'PARENT',
    isAdmin: false,
  };
  @Input() classroomId?: number = 1;

  newsList$!: Observable<News[]>;
  classNews: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsList$ = this.newsService.getNews().pipe(
      // Tri par l'évenement le plus récent
      map((results) =>
        results.sort(
          (a, b) =>
            new Date(b.sendDate).getTime() - new Date(a.sendDate).getTime(),
        ),
      ),
    );

    // Dissocier les actualités de la classe du reste
    if (this?.user?.type === 'PARENT') {
      this.newsList$.subscribe((value) => {
        value.forEach((news: News) => {
          if (news.idClassroom === this.classroomId) {
            this.classNews.push(news);
          }
        });
      });
    }
  }
}
