import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { Todo } from '../../model/todo.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styles: []
})
export class ToDoListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: any;


  constructor(private store: Store <AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }

}
