import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentsAsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ExperimentsComponent } from './experiments.component';
import { ExperimentsAsyncPromisePipeComponent } from './async-promise-pipe/async-promise-pipe.component';
import { ExperimentsRxjsObservableComponent } from './rxjs-observable/rxjs-observable.component';

@NgModule({
  declarations: [
    ExperimentsComponent,
    ExperimentsAsyncPipeComponent,
    ExperimentsAsyncPromisePipeComponent,
    ExperimentsRxjsObservableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExperimentsModule { }
