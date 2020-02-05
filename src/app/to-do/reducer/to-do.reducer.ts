import * as fromToDo from '../acciones/todo.action';
import { Todo } from '../model/todo.model';

const todo1 = new Todo('creando item 1 ');
const todo2 = new Todo('creando item 2 ');

todo2.completado = !todo2.completado;

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer( state = estadoInicial, actions: fromToDo.Acciones): Todo[] {

  switch (actions.type) {

    case fromToDo.AGREGAR_TODO:

      const todo = new Todo(actions.texto);
      return [...state, todo];

    case fromToDo.TOGGLE_TODO:

      return state.map( todoEdit => {
        if (todoEdit.id === actions.id) {
          return { ...todoEdit, completado: !todoEdit.completado};
        } else {
          return todoEdit;
        }
      });

      case fromToDo.EDITAR_TODO:

      return state.map( todoEdit => {
        if (todoEdit.id === actions.id) {
          return { ...todoEdit, texto: actions.text };
        } else {
          return todoEdit;
        }
      });

      case fromToDo.BORRAR_TODO:

      return state.filter( todo => { todo.id !== actions.id  });

      case fromToDo.SELECCIONARTODO_TODO:

        return state.map( todoEdit => {
            return {...todoEdit, completado: actions.completado }
         });

         case fromToDo.BORRAR_ALL_TODO:

          return state.filter( todo => { !todo.completado });

    default: return state;

  }
}
