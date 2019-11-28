import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';


import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';



import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ContactsComponent } from './components/contacts/contacts.component';

 
// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: AppComponent},
    { path: 'profile', component: ProfilesComponent},
    { path: 'contact', component: ContactsComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
