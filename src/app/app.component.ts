import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';
import { LogEntry } from './reducers/log.reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private store = inject(Store);
  count$: Observable<number>;
  digits$: Observable<number[]>;
  log$: Observable<LogEntry[]>;

  constructor() {
    this.count$ = this.store.select('counter');
    this.digits$ = this.count$.pipe(
      map((count) => Math.abs(count).toString().padStart(4, '0').split('').map(Number))
    );
    this.log$ = this.store.select('log');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
