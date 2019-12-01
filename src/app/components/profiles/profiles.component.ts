import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { UserInfo } from 'src/app/core/shared/userInfo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-profiles',
  template: `<h3>Profile</h3>`,
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  userinfo: UserInfo;
  updatedUser: UserInfo;
  userForm: FormGroup;
  userImg: string;
  buttonDisabled = true;
  textMsg = true;

  constructor(private fb: FormBuilder, public storageService: StorageService ) { }

  ngOnInit() {

    this.userinfo = this.storageService.getUser();
    console.log(this.userinfo, 'this.userinfo');
    this.userImg = this.userinfo.profilePhoto;
    this.userForm = this.fb.group({
      name: [this.userinfo.name, Validators.required],
      surname: [this.userinfo.surname, Validators.required],
      dateOfBirth: [this.userinfo.dateOfBirth, Validators.required],
      phoneNumber: [this.userinfo.phoneNumber,
      Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(8), ])],
      login: [this.userinfo.login, Validators.required],
      password: [this.userinfo.password, Validators.required],
      profilePhoto: [this.userImg, Validators.required],
    });

    this.userForm.valueChanges.subscribe(data => {
      this.buttonDisabled = false;
      this.updatedUser = data;
    });

  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e: any) => {
      this.userForm.controls.profilePhoto.setValue(e.target.result);
      this.userImg = e.target.result;
      };
    }
  }

  onUpdate(event) {
    // event.preventDefault();s

    this.storageService.updateUserInfo(this.updatedUser);
    this.textMsg = false;
    this.buttonDisabled = true;
  }


}
