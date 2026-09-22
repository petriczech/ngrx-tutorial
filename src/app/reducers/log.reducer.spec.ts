import { logReducer, initialState, LogEntry } from './log.reducer';
import { increment, decrement, reset } from '../counter.actions';

describe('logReducer', () => {
  it('starts empty', () => {
    expect(initialState).toEqual([]);
  });

  it('records the action name and its delta', () => {
    expect(logReducer(initialState, increment())).toEqual([
      { id: 1, name: 'Increment', delta: 1 },
    ]);
    expect(logReducer(initialState, decrement())).toEqual([
      { id: 1, name: 'Decrement', delta: -1 },
    ]);
    expect(logReducer(initialState, reset())).toEqual([
      { id: 1, name: 'Reset Counter', delta: 0 },
    ]);
  });

  it('puts the newest entry first and numbers it upwards', () => {
    const state = logReducer(logReducer(initialState, increment()), decrement());

    expect(state.map((entry) => entry.id)).toEqual([2, 1]);
    expect(state[0].name).toBe('Decrement');
  });

  it('keeps at most 24 entries', () => {
    const state = Array.from({ length: 30 }).reduce<LogEntry[]>(
      (log) => logReducer(log, increment()),
      initialState
    );

    expect(state).toHaveLength(24);
    expect(state[0].id).toBe(30);
    expect(state[23].id).toBe(7);
  });
});
