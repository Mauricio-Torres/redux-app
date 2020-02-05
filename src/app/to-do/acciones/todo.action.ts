import { Action } from '@ngrx/store';


export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Cambiar Estado todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const SELECCIONARTODO_TODO = '[TODO] Seleccionar ToDos';
export const BORRAR_ALL_TODO = '[TODO] Borrar All todo';


export class AgregarTodoActions implements Action
{
  readonly type = AGREGAR_TODO;

  constructor(public texto: string) { }

}

export class ToggleTodoActions implements Action
{
  readonly type = TOGGLE_TODO;

  constructor(public id: number) { }

}

export class ToggleTodoAllActions implements Action
{
  readonly type = SELECCIONARTODO_TODO;

  constructor(public completado: any) { }

}
export class EditarTodoActions implements Action
{
  readonly type = EDITAR_TODO;

  constructor(public id: number, public text: string) { }

}

export class BorrarTodoActions implements Action
{
  readonly type = BORRAR_TODO;

  constructor(public id: number) { }

}

export class BorrarAllTodoActions implements Action
{
  readonly type = BORRAR_ALL_TODO;
}

export type Acciones = AgregarTodoActions |
                       ToggleTodoActions |
                       BorrarTodoActions |
                       ToggleTodoAllActions |
                       BorrarAllTodoActions|
                       EditarTodoActions;
