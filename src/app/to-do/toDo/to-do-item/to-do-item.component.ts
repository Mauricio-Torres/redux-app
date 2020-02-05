import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { todoReducer } from '../../reducer/to-do.reducer';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { ToggleTodoActions, EditarTodoActions, BorrarTodoActions } from '../../acciones/todo.action';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styles: []
})
export class ToDoItemComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('item') elementToDo: Todo;
  @ViewChild('txtInputChange', {static: false}) txtInputChange: ElementRef;

  checkField: FormControl;
  txtField: FormControl;

  editando = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.checkField = new FormControl(this.elementToDo.completado);
    this.txtField = new FormControl(this.elementToDo.texto, Validators.required);

    this.checkField.valueChanges.subscribe( () => {

      const accion = new ToggleTodoActions(this.elementToDo.id);
      this.store.dispatch(accion);

    });
  }

  editar() {
    this.editando = !this.editando;

    setTimeout( () => {
      this.txtInputChange.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {

    this.editando = !this.editando;

    if (this.txtField.invalid) {
      return;
    }

    if (this.txtField.value === this.elementToDo.texto) {
      return;
    }

    const accion = new EditarTodoActions(this.elementToDo.id, this.txtField.value);
    this.store.dispatch(accion);
  }

  borrarTodo() {
    const accion = new BorrarTodoActions(this.elementToDo.id);
    this.store.dispatch(accion);
  }
}
