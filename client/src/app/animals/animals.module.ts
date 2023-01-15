import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';

import { AnimalManagerComponent } from './animal-manager/animal-manager.component';
import { CustomUiModule         } from '@custom-ui/custom-ui.module';

@NgModule({
  declarations: [
    AnimalManagerComponent
  ],
  imports: [
    CommonModule,
    CustomUiModule
  ]
})
export class AnimalsModule { }
