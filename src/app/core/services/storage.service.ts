import { Injectable } from '@angular/core';
import { UserSettings } from '../constants';


@Injectable({
  providedIn: 'root'
})

export class StorageService {
  // Define ADMIN_USER
  adminUser = UserSettings.ADMIN_USER;

  setUser() {
    localStorage.setItem('userData', JSON.stringify(this.adminUser));
  }

  getUser() {
    const retrievedUser = localStorage.getItem('userData');
    return JSON.parse(retrievedUser);
  }

}
