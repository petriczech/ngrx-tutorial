import { counterReducer, initialState } from './counter.reducer';
import { increment, decrement, reset } from '../counter.actions';

describe('counterReducer', () => {
  it('starts at zero', () => {
    expect(initialState).toBe(0);
  });

  it('returns the current state for an unknown action', () => {
    expect(counterReducer(7, { type: 'noop' } as never)).toBe(7);
  });

  it('counts up on increment', () => {
    expect(counterReducer(7, increment())).toBe(8);
  });

  it('counts down on decrement', () => {
    expect(counterReducer(7, decrement())).toBe(6);
  });

  it('goes below zero on decrement', () => {
    expect(counterReducer(0, decrement())).toBe(-1);
  });

  it('goes back to zero on reset', () => {
    expect(counterReducer(42, reset())).toBe(0);
  });
});
