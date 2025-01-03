import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  navigateHome() {
    this.router.navigate(['/home']);
  }

  navigateSpaces() {
    this.router.navigate(['/spaces']);
  }
  navigateReservations() {
    this.router.navigate(['/reservations']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
