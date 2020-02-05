import { Component, OnInit } from '@angular/core';
import { ToggleTodoAllActions } from './acciones/todo.action';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styles: []
})
export class ToDoComponent implements OnInit {

  completados = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  seleccionarTodos() {
    this.completados = !this.completados;
    const actions = new ToggleTodoAllActions(this.completados);
    this.store.dispatch(actions);
  }
}
