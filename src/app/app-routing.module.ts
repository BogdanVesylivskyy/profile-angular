import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './core/guard/guard';
import { MainComponent } from './components/main/main.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


const routes: Routes = [
  {path: '', canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'main', component: MainComponent , children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full'},
      { path: 'profile', component: ProfilesComponent},
      { path: 'contact', component: ContactsComponent},
      { path: 'logout', component: LogoutComponent},
    ]},
  ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginFormComponent},
  // otherwise redirect to login
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
