import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StorageService } from 'src/app/core/services/storage.service';
import { Friend } from 'src/app/core/shared/friend';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})


export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'date of birth', 'phone Number', 'options'];
  dataSource: any;

  constructor(public storageService: StorageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataSource = this.storageService.getFriendsList() ?
    this.storageService.getFriendsList() : new MatTableDataSource(this.storageService.setFriendsList());

  }


  deleteFriend(friend: number) {
    this.storageService.deleteFriend(friend);
    this.dataSource = new MatTableDataSource(this.storageService.getFriendsList());
  }

  editFriend(friend: Friend) {
    const getAllUrlParams = Object.assign({ ...this.route.snapshot.queryParams }, { id: friend });
    this.router.navigate(['main/profile'], { queryParams: getAllUrlParams });
  }
}
