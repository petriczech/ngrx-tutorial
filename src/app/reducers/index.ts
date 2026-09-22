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


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
