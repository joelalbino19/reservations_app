import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'reservations_app';
  showNavbar: boolean = true; 

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event: any) => {
        switch (event.urlAfterRedirects) {
          case "/login":
          case "/register":
            this.showNavbar = false;
            break;
            
            default:
            this.showNavbar = true;
            break;
        }
      });
  }
}
