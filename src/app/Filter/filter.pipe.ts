import { Pipe, PipeTransform } from '@angular/core';
import * as fromFilter from './filter.actions';
import { Todo } from '../to-do/model/todo.model';



@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtrosValidos: fromFilter.filtrosValidos): Todo[] {

   switch (filtrosValidos) {

    case 'completados':
      return todos.filter(todo => todo.completado);
    case 'pendientes':
      return todos.filter(todo => !todo.completado);
    default:
      return todos;
   }
  }

}
