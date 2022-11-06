import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-animals-main',
  templateUrl: './animals-main.component.html',
  styleUrls: ['./animals-main.component.scss']
})
export class AnimalsMainComponent implements OnInit {
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
