import { HttpClient             } from '@angular/common/http';
import { Injectable             } from '@angular/core';
import { Animal                 } from '../../models/Animals';

@Injectable({
  providedIn: 'root',
  //Injecting into the root allows ALL components & modules to use a SINGLE instance of this service
  //This is a method of making a class a singleton.
})
export class AnimalManagerService {
  animals: any;
  animalsOBJ: Animal[] = []

  constructor(private http: HttpClient) { }

  getAnimals(): any {
    this.http.get("https://localhost:5001/api/animals")
    .subscribe({
      next: res => this.animals = res,
      error: err => console.log(err)
    });
    return this.animals;
  }
}
