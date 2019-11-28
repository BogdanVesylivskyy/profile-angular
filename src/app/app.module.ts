import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';


import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';



import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoutComponent } from './components/logout/logout.component';

 
// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: AppComponent},
    { path: 'profile', component: ProfilesComponent},
    { path: 'contact', component: ContactsComponent},
    { path: 'login', component: LoginFormComponent},
    { path: 'logout', component: LogoutComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    ContactsComponent,
    LoginFormComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
