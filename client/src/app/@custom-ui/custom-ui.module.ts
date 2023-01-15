import { NgModule                   } from '@angular/core';
import { CommonModule               } from '@angular/common';
import { AnimalCardComponent        } from './animal-card/animal-card.component';

@NgModule({
  declarations: [
    AnimalCardComponent
  ],
  exports: [
    AnimalCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomUiModule { }
