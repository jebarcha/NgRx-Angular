import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

export const multiplicar = createAction(
    '[Counter] Multiply',
    props<{numero: number}>()
);

export const dividir = createAction(
    '[Counter] Division',
    props<{ numero: number}>()
)
