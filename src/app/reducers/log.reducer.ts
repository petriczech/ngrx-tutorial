import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './../counter.actions';

export interface LogEntry {
  id: number;
  name: string;
  delta: number;
}

const maxEntries = 24;

export const initialState: LogEntry[] = [];

function record(state: LogEntry[], name: string, delta: number): LogEntry[] {
  const id = state.length ? state[0].id + 1 : 1;
  return [{ id, name, delta }, ...state].slice(0, maxEntries);
}

export const logReducer = createReducer(
  initialState,
  on(increment, (state) => record(state, 'Increment', 1)),
  on(decrement, (state) => record(state, 'Decrement', -1)),
  on(reset, (state) => record(state, 'Reset Counter', 0))
);
