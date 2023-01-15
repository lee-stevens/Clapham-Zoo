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
  animalsTS: Animal[] = [];
  addAnimal: boolean = true;

  constructor(private _http: HttpClient, private _animalManagerService: AnimalManagerService) {}

  ngOnInit() {
    this._http.get("https://localhost:5001/api/animals") //Updates on reload
    .subscribe({
      next: res => this.animals = res,
      error: err => console.log(err)
    });
    // this.animals = this._animalManagerService.getAnimals(); //Doesn't update on reload
  }

  convertToTS(animalsJSON?: any): Animal[] {
    return animalsJSON.forEach((animal: any) => {
      this.animalsTS.push({
        id: animal.id,
        commonName: animal.commonName,
        binomialName: animal.binomialName,
        kingdom: '',
        phylum: '',
        class: '',
        order: '',
        subOrder: '',
        family: '',
        subFamily: '',
        genus: '',
        species: ''
      })
    });
  }
};
