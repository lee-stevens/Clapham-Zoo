import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experiments-rxjs-observable',
  templateUrl: './rxjs-observable.component.html',
  styleUrls: ['./rxjs-observable.component.scss']
})
export class ExperimentsRxjsObservableComponent {
  consoleOutput: string = "";
  observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  constructor() {
    console.log('just before subscribe');
    this.consoleOutput += "just before subscribe<br>"
    this.observable.subscribe({
      next(x) {
        this.consoleOutput += `got value ${x}`
        console.log('got value ' + x);
      },
      error(err) {
        this.consoleOutput += `something wrong occured: ${err}`
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        this.consoleOutput += 'done'
        console.log('done');
      },
    });
    this.consoleOutput += 'just after subscribe'
    console.log('just after subscribe');
  }
}
