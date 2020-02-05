import { Todo } from './to-do/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './to-do/reducer/to-do.reducer';
import * as fromFilter from './Filter/filter.reducer';
import * as fromFilterActions from './Filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filtro: fromFilterActions.filtrosValidos;
}

export const appReducers: ActionReducerMap <AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFilter.filtroReducer
}
