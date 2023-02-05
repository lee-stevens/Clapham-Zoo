import { HttpClient             } from '@angular/common/http';
import { Injectable             } from '@angular/core';
import { BehaviorSubject, Observable             } from 'rxjs';
import { Animal                 } from '../../models/Animals';

@Injectable({
  providedIn: 'root', //Singleton
})
export class AnimalManagerService {
  animal: any;
  animals: any;

  animalsSubject = new BehaviorSubject<Animal[]>([]);
  animals$: Observable<Animal[]> = this.animalsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getAnimals();
  }

  getAnimals() {
    console.log("AnimalManagerService | Get Animals")
    this.http.get<Animal[]>("https://localhost:5001/api/animals")
    .subscribe({
      next: res => this.animalsSubject.next(res),
      error: err => console.log(err)
    });
  }

  getAnimalsAsObservable(): Observable<Animal[]> {
    return this.animalsSubject.asObservable();
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
