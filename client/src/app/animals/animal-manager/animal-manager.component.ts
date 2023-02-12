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
  addAnimal = true;
  animals$ = new Observable<Animal[]>();
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
  )
  {
    this.animals$ = this._animalManagerService.getAnimalsAsObservable();
  }

  onSubmitAnimalForm(){
    this._animalManagerService.addAnimal(this.animalForm);
  }

  onClickDeleteAnimal(id: number){
    this._animalManagerService.deleteAnimal(id);
  }
};
