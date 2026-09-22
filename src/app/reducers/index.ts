import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { logReducer, LogEntry } from './log.reducer';

export interface State {
  counter: number;
  log: LogEntry[];
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  log: logReducer,
};

export const selectCount = createFeatureSelector<number>('counter');

export const selectLog = createFeatureSelector<LogEntry[]>('log');

export const selectDigits = createSelector(selectCount, (count) =>
  Math.abs(count).toString().padStart(4, '0').split('').map(Number)
);

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
