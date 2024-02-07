import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {News} from "@core/models";

@Component({
  selector: 'app-news-element',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './news-element.component.html',
  styleUrl: './news-element.component.scss'
})
export class NewsElementComponent {
  @Input() news!: News;
}
