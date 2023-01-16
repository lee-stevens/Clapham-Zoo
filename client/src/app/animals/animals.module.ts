import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { FormsModule            } from '@angular/forms';

import { CustomUiModule         } from '@custom-ui/custom-ui.module';
import { AnimalManagerComponent } from './animal-manager/animal-manager.component';
import { AnimalManagerService   } from './animal-manager/animal-manager.service';

@NgModule({
  declarations: [
    AnimalManagerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomUiModule
  ],
  providers: [
    AnimalManagerService
  ]
})
export class AnimalsModule { }
