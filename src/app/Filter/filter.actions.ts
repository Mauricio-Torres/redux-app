import { Action } from '@ngrx/store';
import { type } from 'os';

export const SET_FILTER = '[Filter] Set Filter';
export type filtrosValidos = 'todos' | 'completados' | 'pendientes';


export class SetFilterActions implements Action {

  readonly type = SET_FILTER;

  constructor(public filtro: filtrosValidos) {}
}


export type acciones = SetFilterActions;
