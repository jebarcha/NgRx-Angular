import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, multiplicar, dividir } from './contador.actions';

export const initialState = 20;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiplicar, (state, { numero } ) => state * numero ),
  on(dividir, (state, { numero } ) => state / numero ),
  on(reset, (state) => initialState)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}