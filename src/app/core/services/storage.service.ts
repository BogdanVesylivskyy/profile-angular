import { Injectable } from '@angular/core';
import { UserSettings } from '../constants';
import * as faker from 'faker';
import { UserInfo } from '../shared/userInfo';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  // Define ADMIN_USER
  adminUser = UserSettings.ADMIN_USER;

  // setUser() {
  //   localStorage.setItem('userData', JSON.stringify(this.adminUser));
  // }

  getUser() {
    const retrievedUser = localStorage.getItem('userData');
    return JSON.parse(retrievedUser);
  }

  login() {
    localStorage.setItem('userData', JSON.stringify(Object.assign(this.getUser(), {isLogined: true})));
  }

  logout() {
    console.log(this.getUser(), 'this.getUser()')
    localStorage.setItem('userData', JSON.stringify(Object.assign(this.getUser(), {isLogined: false})));
  }

  setUserInfo() {
    localStorage.setItem('userData', JSON.stringify(Object.assign( this.adminUser,
    {
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
      dateOfBirth: faker.date.past(),
      phoneNumber: faker.random.number({min: 380630000000, max: 380639999999}),
      profilePhoto: faker.image.avatar(),
    }
    )));
  }


  updateUserInfo(user: UserInfo) {
    console.log(user, 'user');
    localStorage.setItem('userData', JSON.stringify(Object.assign(this.getUser(), user)));
  }

}
