import { HttpClient, HttpParams             } from '@angular/common/http';
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

  addAnimal(animal: Animal) {
    console.log(`Adding Animal: ${animal.species}`)
    console.log(animal)
    this.http.post("https://localhost:5001/api/animals/", animal)
    .subscribe((res) => {
       console.log(res);
    })
  }

  deleteAnimal(id: number) {
    console.log(`Deleting Animal with id: ${id}`)
    this.http.delete(`https://localhost:5001/api/animals/${id}`)
    .subscribe((res) => {
       console.log(res);
       console.log(`Deleted Animal with id ${id}`)
       this.getAnimals();
    })
  }
}
