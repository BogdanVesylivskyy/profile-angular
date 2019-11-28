import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `<h3>Contacts</h3>`,
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
