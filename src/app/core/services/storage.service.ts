import { Injectable } from '@angular/core';
import { UserSettings } from '../constants';
import * as faker from 'faker';
import * as moment from 'moment';
import { UserInfo } from '../shared/userInfo';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  // Define ADMIN_USER
  adminUser = UserSettings.ADMIN_USER;

  getUser() {
    const retrievedUser = localStorage.getItem('userData');
    return JSON.parse(retrievedUser);
  }

  login() {
    localStorage.setItem('userData', JSON.stringify(Object.assign(this.getUser(), {isLogined: true})));
  }

  logout() {
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

  setFriendsList() {
    const list = [...new Array(10).keys()].map((_, i) => ({
      id: i,
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
      dateOfBirth: moment(faker.date.past()).format('DD-MM-YYYY'),
      phoneNumber: faker.random.number({min: 380630000000, max: 380639999999}),
      profilePhoto: faker.image.avatar(),
    }));
    localStorage.setItem('friendsData', JSON.stringify(list));
  }

  getFriendsList() {
    const retrievedFriends = localStorage.getItem('friendsData');
    return JSON.parse(retrievedFriends);
  }

  deleteFriend(friendId) {
    const friendsList = JSON.parse(localStorage.getItem('friendsData'));
    const filteredList = friendsList.filter((friend) => friend.id != friendId);

    localStorage.setItem('friendsData', JSON.stringify(filteredList));
  }

}
