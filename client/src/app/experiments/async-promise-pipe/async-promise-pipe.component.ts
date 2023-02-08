import { Component } from '@angular/core';

@Component({
  selector: 'app-experiments-async-promise-pipe',
  templateUrl: './async-promise-pipe.component.html',
  styleUrls: ['./async-promise-pipe.component.scss']
})
export class ExperimentsAsyncPromisePipeComponent   {
  greeting: Promise<string>|null = null;
  arrived: boolean = false;

  private resolve: Function|null = null;

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }
}
