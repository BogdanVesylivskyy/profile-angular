import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';

import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';
import { User } from 'src/app/core/shared/user';

@Component({
  selector: 'app-login-form',
  template: `<h3>Login form</h3>`,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  profileForm: FormGroup;
  user: User;


  constructor(private fb: FormBuilder, public storageService: StorageService, private router: Router) {}

  ngOnInit() {
    this.storageService.setUser();
    this.user = this.storageService.getUser();

    this.profileForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.isFormInvalid();

  }

  isFormInvalid() {

    const userNameField = this.profileForm.get('login');
    const passwordField = this.profileForm.get('password');


    userNameField.valueChanges.subscribe(login => {
      if (login !== this.user.userName) {
        this.profileForm.controls.login.setErrors({
          invalid: true,
        });
      }
    });

    passwordField.valueChanges.subscribe(pass => {
      if (pass !== this.user.userPassword) {
        this.profileForm.controls.password.setErrors({
          invalid: true,
        });
      }
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      localStorage.setItem('userData', JSON.stringify(Object.assign(this.user, {isLogined: true})));
      this.router.navigate(['']);
    }
  }

}
