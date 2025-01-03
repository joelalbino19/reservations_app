import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  username = 'User';

  constructor(private router: Router) {}

  logout(): void {
    alert('You have been logged out.');
    this.router.navigate(['/login']);
  }
}
