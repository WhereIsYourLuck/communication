import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';

export class profileComponent {}

@Component({
  selector: 'app-profile-preview',
  standalone: true,
  imports: [MatCardModule, MatIconModule, AsyncPipe],
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss'],
})
export class ProfilePreviewComponent {
  @Input() username: string = '';
}
