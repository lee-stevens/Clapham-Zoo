import { Component              } from '@angular/core';
import { Observable             } from 'rxjs';
import { AnimalManagerService   } from './animal-manager.service';
import { Animal                 } from '../../models/Animals';

@Component({
  selector: 'app-animal-manager',
  templateUrl: './animal-manager.component.html',
  styleUrls: ['./animal-manager.component.scss'],
})
export class AnimalManagerComponent {
  animals: Animal[] = [];
  animalsDirect: any;
  addAnimal = true;
  deleteAnimal = true;
  animalToDelete: number = 9999;
  animalsObservable$ = new Observable<Animal[]>();
  animalForm: Animal = {
    species: '',
    id: 0,
    commonName: '',
    binomialName: '',
    kingdom: '',
    phylum: '',
    class: '',
    order: '',
    subOrder: '',
    family: '',
    subFamily: '',
    genus: ''
  }

  constructor(
    private _animalManagerService: AnimalManagerService
  ) {}

  ngOnInit() {
    this.getAnimalsObservable();
  }

  getAnimalsObservable() {
    this.animalsObservable$ = this._animalManagerService.getAnimalsAsObservable();
  }

  onSubmitAnimalForm(){
    this._animalManagerService.addAnimal(this.animalForm);
    this.getAnimalsObservable();
  }

  onSubmitDeleteAnimalForm(id: number){
    this._animalManagerService.deleteAnimal(id);
    this.getAnimalsObservable();
  }
};
