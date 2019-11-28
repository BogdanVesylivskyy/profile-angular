import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<mat-toolbar color="primary" class="app-header">
      <span class="nav-tool-items">
        <a mat-button routerLink="">Home</a>
        <a mat-button routerLink="/profile">Login</a>
        <a mat-button routerLink="/contact">Contact</a>
        <a mat-button routerLink="/login">Login</a>
        <a mat-button routerLink="/logout" routerLinkActive="active">Logout</a>
      </span>
    </mat-toolbar>


    <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'profile-angular-project';
}
