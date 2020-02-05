import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as fromToDo from '../../acciones/todo.action';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styles: []
})
export class ToDoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.txtInput = new FormControl('', Validators.required);

  }

  agregarToDo() {
     console.log(this.txtInput.value)
     if (this.txtInput.invalid) {
       return;
     }

     const accion = new fromToDo.AgregarTodoActions(this.txtInput.value);
     this.store.dispatch(accion);
  }
}
