import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StorageService } from 'src/app/core/services/storage.service';
import { Friend } from 'src/app/core/shared/friend';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})


export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'date of birth', 'phone Number', 'options'];
  dataSource: any;

  constructor(public storageService: StorageService) { }

  ngOnInit() {
    this.storageService.setFriendsList();
    this.dataSource = new MatTableDataSource(this.storageService.getFriendsList());

  }


  deleteFriend(friend: Friend) {
    this.storageService.deleteFriend(friend);
    this.dataSource = new MatTableDataSource(this.storageService.getFriendsList());
  }
}
