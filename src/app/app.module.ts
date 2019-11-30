import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoutComponent } from './components/logout/logout.component';

import { StorageService } from './core/services/storage.service';
import { AuthGuard } from './core/guard/guard';



@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    ContactsComponent,
    LoginFormComponent,
    LogoutComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [StorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


