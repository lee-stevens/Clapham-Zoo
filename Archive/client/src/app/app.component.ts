import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ //Lifecycle hook
  title = 'Animals 101';
  animals: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals(){
    this.http.get("https://localhost:5001/api/animals")
    .subscribe({
      next: res => this.animals = res,
      error: err => console.log(err)
    });
  }
}
