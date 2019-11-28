import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<div>
    <h1>Angular routes</h1>
    <nav>
      <a routerLink="">Home</a>
      <a routerLink="/profile">Profile</a>
      <a routerLink="contact">Contact</a>
    </nav>
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  title = 'profile-angular-project';
}
