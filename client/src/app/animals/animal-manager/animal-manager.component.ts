import { Component, OnInit      } from '@angular/core';
import { HttpClient             } from '@angular/common/http';
import { AnimalManagerService   } from './animal-manager.service';
import { Animal                 } from '../../models/Animals';

@Component({
  selector: 'app-animal-manager',
  templateUrl: './animal-manager.component.html',
  styleUrls: ['./animal-manager.component.scss'],
  //providers: [AnimalManagerService]
  //Injection at a component level means, each instance of this component gets it's own service
})
export class AnimalManagerComponent implements OnInit {
  animals: any;
  addAnimal = true;
  deleteAnimal = true;
  animalToDelete: number = 9999;
  animalForm: AnimalForm = {
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

  constructor(private _animalManagerService: AnimalManagerService, private _http: HttpClient) {
    this.getAnimals();
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.getAnimals();
  }

  getAnimals(){
    console.log("AnimalManagerComponent | Get Animals")
    this.animals = this._animalManagerService.getAnimals();
  }

  onSubmitAnimalForm(){
    console.log("AnimalManagerComponent | OnSubmitAnimalForm")
    this._animalManagerService.addAnimal(this.animalForm);
    this.getAnimals();
  }

  onSubmitDeleteAnimalForm(id: number){
    this._animalManagerService.deleteAnimal(id);
    this.getAnimals();
  }

};

export interface AnimalForm {
  id: number
  commonName: string
  binomialName: string
  kingdom: string
  phylum: string
  class: string
  order: string
  subOrder: string
  family: string
  subFamily: string
  genus: string
  species: string
}
