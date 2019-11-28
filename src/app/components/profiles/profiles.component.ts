import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  photo = 'photo';
  name: string;
  surname: string;
  birth: number;
  number = 'phone number';

  constructor() { }

  ngOnInit() {
  }

}