import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { FormsModule            } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule       } from 'ngx-bootstrap/dropdown'
import { BsDropdownConfig       } from 'ngx-bootstrap/dropdown';

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
    CustomUiModule,
    BsDropdownModule,
    BrowserAnimationsModule
  ],
  providers: [
    AnimalManagerService,
    { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }
  ]
})
export class AnimalsModule { }
