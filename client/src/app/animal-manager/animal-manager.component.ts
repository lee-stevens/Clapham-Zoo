import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-animal-manager',
  templateUrl: './animal-manager.component.html',
  styleUrls: ['./animal-manager.component.scss']
})
export class AnimalManagerComponent implements OnInit {
  title = 'Dashboard';
  animals: any;
  addAnimal: boolean = true;

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
