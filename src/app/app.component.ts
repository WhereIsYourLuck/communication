import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from '@core/components/login/login.component';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Communication';
  isLoggedIn: boolean;

  constructor(private auth: AuthService) {
    this.isLoggedIn = this.auth.isAuthenticated();
  }
}
