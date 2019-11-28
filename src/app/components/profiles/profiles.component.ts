import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  photo = 'photo';
  name = 'name';
  surname = 'surname';
  birth = 'birth';
  number = 'phone number';

  constructor() { }

  ngOnInit() {
  }

}