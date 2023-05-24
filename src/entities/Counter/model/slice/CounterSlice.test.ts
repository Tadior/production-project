import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './CounterSlice';

describe('getCounterValue', () => {
  test('decrement counter value', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test('increment counter value', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test('work with indefined', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
