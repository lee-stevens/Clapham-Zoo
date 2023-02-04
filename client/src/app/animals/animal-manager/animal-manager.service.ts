import { HttpClient             } from '@angular/common/http';
import { Injectable             } from '@angular/core';
import { Animal                 } from '../../models/Animals';

@Injectable({
  providedIn: 'root',
  //Injecting into the root allows ALL components & modules to use a SINGLE instance of this service
  //This is a method of making a class a singleton.
})
export class AnimalManagerService {
  animal: any;
  animals: any;

  constructor(private http: HttpClient) {}

  getAnimals(): Animal[] {
    console.log("AnimalManagerService | Get Animals")
    this.http.get("https://localhost:5001/api/animals")
    .subscribe({
      next: res => this.animals = res,
      error: err => console.log(err)
    });
    return this.animals;
  }

  getAnimal(id: number): any {
    console.log(`AnimalManagerService | Adding Animal with id: ${id}`);
    this.http.get(`https://localhost:5001/api/animals/${id}`)
    .subscribe({
      next: res => this.animal = res,
      error: err => console.log(err)
    });
    return this.animal;
  }

  addAnimal(animal: Animal) {
    console.log(`AnimalManagerService | Adding Animal: ${animal.species}`)
    this.http.post("https://localhost:5001/api/animals/", animal)
    .subscribe(
      (res) => {
       console.log(res);
    })
  }

  deleteAnimal(id: number) {
    console.log(`AnimalManagerService | Deleting Animal with id: ${id}`)
    this.http.delete(`https://localhost:5001/api/animals/${id}`)
    .subscribe({
      next: res => {
        console.log(res);
        return this.getAnimals();
      },
      error: err => console.log(err)
    });
  }
}
