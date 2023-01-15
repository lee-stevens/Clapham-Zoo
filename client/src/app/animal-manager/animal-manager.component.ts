import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-animal-manager',
  templateUrl: './animal-manager.component.html',
  styleUrls: ['./animal-manager.component.scss']
})
export class AnimalManagerComponent implements OnInit {
  animals: any;
  addAnimal: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAnimals();
  }

  // ngOnDestroy(): void {
  //   this.getSomethingSubscription.unsubscribe();
  // }

  getAnimals(){
    this.http.get("https://localhost:5001/api/animals")
    .subscribe({
      next: res => this.animals = res,
      error: err => console.log(err)
    });
  }

  //Example of how subscriptions are supposed to be built
  // getSometing(){
  //   const getSomethingObservable = new Observable((observer) => {
  //     let count = 0;
  //     setInterval(() => {
  //       observer.next(count);
  //       count++;
  //     }, 1000)
  //   });
  //   this.getSomethingSubscription = getSomethingObservable.subscribe(data => {
  //     console.log(data);
  //   });
  // }
};
