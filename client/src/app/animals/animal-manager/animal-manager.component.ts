import { Component, OnInit      } from '@angular/core';
import { AnimalManagerService   } from './animal-manager.service';
import { Animal                 } from '../../models/Animals';

@Component({
  selector: 'app-animal-manager',
  templateUrl: './animal-manager.component.html',
  styleUrls: ['./animal-manager.component.scss'],
})
export class AnimalManagerComponent {
  animals: Animal[] = [];
  addAnimal = true;
  deleteAnimal = true;
  animalToDelete: number = 9999;
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

  constructor(private _animalManagerService: AnimalManagerService)
  {
    this.getAnimals();
    console.log(this.animals)
  }

  ngOnChanges(): void {
    this.getAnimals();
  }

  getAnimals(){
    console.log("AnimalManagerComponent | getAnimals")
    this.animals = this._animalManagerService.getAnimals();
  }

  onSubmitAnimalForm(){
    console.log("AnimalManagerComponent | onSubmitAnimalForm")
    this._animalManagerService.addAnimal(this.animalForm);
    this.getAnimals();
  }

  onSubmitDeleteAnimalForm(id: number){
    this._animalManagerService.deleteAnimal(id);
    this.getAnimals();
  }
};
