import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.scss']
})
export class AccountManagerComponent implements OnInit {
  appUsers: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAppUsers();
  }

  getAppUsers(){
    this.http.get("https://localhost:5001/api/appusers")
    .subscribe({
      next: res => this.appUsers = res,
      error: err => console.log(err)
    });
  }
}
