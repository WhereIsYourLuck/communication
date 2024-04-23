import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CommonModule,
    MatBadgeModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isSidebarOpened: boolean = false;

  constructor(public sidebarService: SidebarService) {
    this.sidebarService.sidebarOpen$.subscribe((value) => {
      this.isSidebarOpened = value;
    });
  }

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }
}
