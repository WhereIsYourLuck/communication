import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private data: DataServiceService) { }

  canActivate(): boolean {
    if (this.data.getData('email') != null){
      return true; // User is logged in, allow access
    } else {
      window.location.href = 'http://localhost:4200/login'; // Redirect to login page if not logged in
      return false;
    }
  }
}