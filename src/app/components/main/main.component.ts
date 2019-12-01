import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "src/app/core/services/storage.service";
import { User } from "src/app/core/shared/user";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  currentUser: User;
  constructor(public storageService: StorageService, private router: Router) {}

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
  }

  logout() {
    if (this.currentUser) {
      this.storageService.logout();
      this.router.navigate(['login']);
    }
  }
}
