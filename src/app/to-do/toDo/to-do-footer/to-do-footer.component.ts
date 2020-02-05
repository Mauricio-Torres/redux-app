import * as fromFilter from './../../../Filter/filter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { Todo } from '../../model/todo.model';
import { BorrarAllTodoActions } from '../../acciones/todo.action';


@Component({
  selector: 'app-to-do-footer',
  templateUrl: './to-do-footer.component.html',
  styles: []
})
export class ToDoFooterComponent implements OnInit {

  filtrosValidos: fromFilter.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: any;
  pendientes: any;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe ( state => {
        this.filtroActual = state.filtro;
        this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(nuevoFiltro: any) {
    const accion = new fromFilter.SetFilterActions(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(pendiente: Todo[]){
    this.pendientes = pendiente.filter(todo => !todo.completado).length;
  }

  borrarTodo(){
    const accion = new BorrarAllTodoActions();
    this.store.dispatch(accion);
  }

}
